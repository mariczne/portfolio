// https://github.com/vladshcherbin/rollup-plugin-svelte-static-html
import { OutputChunk, rollup, Plugin } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import vm from "vm";
import fs from "fs-extra";
import posthtml from "posthtml";
import insertAt from "posthtml-insert-at";
import { minify } from "html-minifier";

import type { create_ssr_component } from "svelte/types/runtime/internal/ssr";
type SsrComponent = ReturnType<typeof create_ssr_component>;

export interface Options {
  component: string;
  output: string;
  template: string;
  dev: boolean;
}

function svelteStatic({ component, output, template, dev }: Options): Plugin {
  return {
    name: "svelte-static",
    async writeBundle() {
      const { generate } = await rollup({
        input: component,
        plugins: [
          resolve({
            browser: true,
          }),

          svelte({
            preprocess: [sveltePreprocess()],
            emitCss: false,
            compilerOptions: {
              dev,
              css: true,
              generate: "ssr",
            },
          }),
        ],
      });

      const bundle = await generate({ format: "iife" });
      const entryChunk = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.type === "chunk" && chunkOrAsset.isEntry
      ) as OutputChunk;

      const Component = vm.runInNewContext(entryChunk.code, {
        module,
      }) as SsrComponent;
      const { html, css } = Component.render();

      const htmlTemplate = await fs.readFile(template, "utf8");
      const scripts = await fs.readFile(`${output}/bundle.js`, "utf8");

      const processedHtml = await posthtml(
        [
          insertAt({ selector: "body", prepend: html }),
          insertAt({
            selector: "head",
            append: `<style>${css.code}</style>`,
          }),
          insertAt({
            selector: "head",
            append: `<script>${scripts}</script>`,
          }),
        ].filter(Boolean)
      ).process(htmlTemplate);

      const minifiedHtml = minify(processedHtml.html, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        caseSensitive: true,
        minifyCSS: !dev,
        minifyJS: !dev,
      });

      await fs.outputFile(`${output}/index.html`, minifiedHtml);
    },
  };
}

export default svelteStatic;

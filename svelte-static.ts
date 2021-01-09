// https://github.com/vladshcherbin/rollup-plugin-svelte-static-html
import { OutputChunk, rollup, Plugin } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import vm from "vm";
import { readdir, readFile, outputFile } from "fs-extra";
import { resolve as pathResolve, extname } from "path";
import posthtml from "posthtml";
import insertAt from "posthtml-insert-at";
import svgSpreact from "svg-spreact";
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

      const htmlTemplate = await readFile(template, "utf8");
      const scripts = await readFile(`${output}/bundle.js`, "utf8");
      const svgSprite = await createSprite("./src/components/Icon/svg/");

      const processedHtml = await posthtml(
        [
          insertAt({ selector: "body", prepend: html }),
          insertAt({ selector: "body", append: svgSprite }),
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

      await outputFile(`${output}/index.html`, minifiedHtml);
    },
  };
}

// This function needs better types; no typings available for svg-spreact
async function createSprite(svgDirectory: string): Promise<string> {
  async function readFolder(path: string) {
    const files = (await readdir(path)).filter(
      (file) => extname(file) === ".svg"
    );

    const filenames = files.map((file) => file.replace(".svg", ""));

    const svgs = await Promise.all(
      files.map(async (file) =>
        (await readFile(pathResolve(path, file))).toString()
      )
    );

    return Promise.resolve({ svgs, filenames });
  }

  function generateSprite({ svgs, filenames }) {
    const processId = (n: number) => `icon-${filenames[n]}`;

    return svgSpreact(svgs, { optimize: true, tidy: true, processId });
  }

  const { defs } = await readFolder(svgDirectory).then(generateSprite);

  return defs;
}

export default svelteStatic;

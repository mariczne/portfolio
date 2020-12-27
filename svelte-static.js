// https://github.com/vladshcherbin/rollup-plugin-svelte-static-html
import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import vm from "vm";
import fs from "fs-extra";
import posthtml from "posthtml";
import insertAt from "posthtml-insert-at";
import { minify } from "html-minifier";

function svelteStaticHtml({ component, output, template, dev }) {
  return {
    name: "svelte-static-html",
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
        (chunkOrAsset) => chunkOrAsset.isEntry
      );

      const Component = vm.runInNewContext(entryChunk.code, { module });
      const { html, css } = Component.render();

      const htmlTemplate = await fs.readFile(template, "utf8");
      const scripts = (await fs.readFile(`${output}/bundle.js`)).toString();

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
      });

      await fs.outputFile(`${output}/index.html`, minifiedHtml);
    },
  };
}

export default svelteStaticHtml;

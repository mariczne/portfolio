// https://github.com/vladshcherbin/rollup-plugin-svelte-static-html
import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import css from "rollup-plugin-css-only";
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
            dedupe: ["svelte"],
          }),
          svelte({
            preprocess: [sveltePreprocess()],
            compilerOptions: {
              dev,
              generate: "ssr",
            },
          }),
          css(),
        ],
      });

      const bundle = await generate({ format: "iife" });
      const entryChunk = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.isEntry
      );
      const Component = vm.runInNewContext(entryChunk.code, { module });
      const { html } = Component.render();
      const htmlTemplate = await generateHtmlTemplate(template, html);
      const styles = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.fileName === "bundle.css"
      );
      const scripts = (await fs.readFile(`${output}/bundle.js`)).toString();
      const processedHtml = await posthtml(
        [
          insertAt({ selector: "body", prepend: html }),
          insertAt({
            selector: "head",
            append: `<style>${styles.source}</style>`,
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

async function generateHtmlTemplate(template) {
  if (template) {
    return fs.readFile(template, "utf8");
  }
}

export default svelteStaticHtml;

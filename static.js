import vm from "vm";
import fs from "fs-extra";
import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import posthtml from "posthtml";
import beautify from "posthtml-beautify";
import insertAt from "posthtml-insert-at";
import css from "rollup-plugin-css-only";
import smartAsset from "rollup-plugin-smart-asset";

async function generateHtmlTemplate(template) {
  if (template) {
    return fs.readFile(template, "utf8");
  }
}

export default function svelteStaticHtml(options = {}) {
  const { component, output, template } = options;

  if (!component) {
    throw new Error(
      '(plugin svelte-static-html) "component" must be specified'
    );
  }

  if (!output) {
    throw new Error('(plugin svelte-static-html) "output" must be specified');
  }

  return {
    name: "svelte-static-html",
    async writeBundle() {
      const { generate } = await rollup({
        input: component,
        plugins: [
          resolve(),
          svelte({
            preprocess: sveltePreprocess(),
            compilerOptions: {
              generate: "ssr",
            },
          }),
          css(),
          smartAsset(),
        ],
      });
      const bundle = await generate({ format: "cjs" });
      // console.log(bundle);
      const entryChunk = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.isEntry
      );
      const Component = vm.runInNewContext(entryChunk.code, { module });
      const { html } = Component.render();
      const htmlTemplate = await generateHtmlTemplate(template, html);
      const processedHtml = await posthtml(
        [
          template && insertAt({ selector: "body", prepend: html }),
          beautify({
            rules: {
              blankLines: false,
            },
          }),
        ].filter(Boolean)
      ).process(htmlTemplate);

      await fs.outputFile(`${output}/index.html`, processedHtml.html);

      // await bundle.write()

      const styles = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.fileName === "bundle.css"
      );
      // console.log(styles)

      await fs.outputFile(`${output}/bundle.css`, styles.source);

      bundle.output.forEach(chunkOrAsset => console.log(chunkOrAsset.fileName))
    },
  };
}

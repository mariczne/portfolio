import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";
import smartAsset from "rollup-plugin-smart-asset";
import vm from "vm";
import fs from "fs-extra";
import { rollup } from "rollup";
import posthtml from "posthtml";
import beautify from "posthtml-beautify";
import insertAt from "posthtml-insert-at";
import typescript from "@rollup/plugin-typescript";
import image from "svelte-image";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    format: "iife",
    name: "main",
    file: "build/bundle.js",
  },
  plugins: [
    // smartAsset({ url: "copy" }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),

    typescript({ sourceMap: false }),

    commonjs(),

    svelteStaticHtml({
      component: "src/Index.svelte",
      output: "build",
      template: "src/template.html",
    }),

    !production && serve(),
    !production && livereload(),

    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function svelteStaticHtml({ component, output, template }) {
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
            preprocess: [sveltePreprocess(), image()],
            compilerOptions: {
              dev: !production,
              generate: "ssr",
            },
          }),
          css(),
          // !production && serve(),
          // !production && livereload("src"),
          production && terser(),
        ],
      });

      const bundle = await generate({ format: "cjs" });
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

      const styles = bundle.output.find(
        (chunkOrAsset) => chunkOrAsset.fileName === "bundle.css"
      );
      await fs.outputFile(`${output}/bundle.css`, styles.source);

      bundle.output.forEach((chunkOrAsset) =>
        console.log(chunkOrAsset.fileName)
      );
    },
  };
}

async function generateHtmlTemplate(template) {
  if (template) {
    return fs.readFile(template, "utf8");
  }
}

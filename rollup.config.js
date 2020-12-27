import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import css from "rollup-plugin-css-only";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import vm from "vm";
import fs from "fs-extra";
import fg from "fast-glob";
import posthtml from "posthtml";
import insertAt from "posthtml-insert-at";
import { minify } from "html-minifier";

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
    resolve({
      browser: true,
    }),

    typescript({ sourceMap: false }),

    svelteStaticHtml({
      component: "src/Index.svelte",
      output: "build",
      template: "src/template.html",
    }),

    terser(),

    !production && serve(),

    !production && {
      name: "watch-external",
      async buildStart() {
        const files = await fg("src/**/*");
        for (let file of files) {
          this.addWatchFile(file);
        }
      },
    },
    
    !production && livereload(),
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
            preprocess: [sveltePreprocess()],
            compilerOptions: {
              dev: !production,
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
      const processedHtml = await posthtml(
        [
          insertAt({ selector: "body", prepend: html }),
          insertAt({
            selector: "head",
            append: `<style>${styles.source}</style>`,
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

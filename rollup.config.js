import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";
import svelteStaticHtml from "./static";
import smartAsset from "rollup-plugin-smart-asset";

const production = !process.env.ROLLUP_WATCH;

// function serve() {
//   let server;

//   function toExit() {
//     if (server) server.kill(0);
//   }

//   return {
//     writeBundle() {
//       if (server) return;
//       server = require("child_process").spawn(
//         "npm",
//         ["run", "start", "--", "--dev"],
//         {
//           stdio: ["ignore", "inherit", "inherit"],
//           shell: true,
//         }
//       );

//       process.on("SIGTERM", toExit);
//       process.on("exit", toExit);
//     },
//   };
// }

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    // name: "app",
    file: "build/bundle.js",
  },
  plugins: [
    // svelte({
    //   preprocess: sveltePreprocess(),
    //   compilerOptions: {
    //     dev: !production,
    //   },
    // }),

    // smartAsset({ url: "copy" }),

    // css({ output: "bundle.css" }),

    // resolve({
    //   browser: true,
    //   dedupe: ["svelte"],
    // }),

    // commonjs(),

    svelteStaticHtml({
      component: "src/App.svelte",
      output: "build",
      template: "src/template.html",
      // preprocess: [sveltePreprocess()],
      // plugins: [css({ output: "bundle.css" })],
      // preprocess: sveltePreprocess(),
    }),

    // plugins: [
    //   // smartAsset(),
    //   // resolve({
    //   //   browser: true,
    //   //   dedupe: ["svelte"],
    //   // }),
    //   // commonjs(),
    // ],

    // !production && serve(),
    // !production && livereload("build"),

    // production &&
    // production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

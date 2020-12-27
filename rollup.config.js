import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import svelteStaticHtml from "./svelte-static";
import fg from "fast-glob";

const production = !process.env.ROLLUP_WATCH;

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
      dev: !production,
    }),

    terser(),

    !production && serve(),

    !production && watchExternal(),

    !production && livereload(),
  ],
  watch: {
    clearScreen: false,
  },
};

function watchExternal() {
  return {
    name: "watch-external",
    async buildStart() {
      const files = await fg("src/**/*");
      for (let file of files) {
        this.addWatchFile(file);
      }
    },
  };
}

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

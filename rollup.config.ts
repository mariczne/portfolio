import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import svelteStatic from "./svelte-static";
import { spawn, ChildProcess } from "child_process";
import fg from "fast-glob";
import type { Plugin, RollupOptions } from "rollup";

const production = !process.env.ROLLUP_WATCH;

const config: RollupOptions = {
  input: "src/main.ts",
  output: {
    format: "iife",
    name: "main",
    file: "build/bundle.js",
    sourcemap: !production,
  },
  plugins: [
    resolve({ browser: true }),

    typescript({ sourceMap: !production, inlineSources: !production }),

    svelteStatic({
      component: "src/Index.svelte",
      output: "build",
      template: "src/template.html",
      dev: !production,
    }),

    !production && serve(),

    !production && watchExternal(),

    !production && livereload(),
  ],
  watch: {
    clearScreen: false,
  },
};

function watchExternal(): Plugin {
  return {
    name: "watch-external",
    async buildStart() {
      const files = await fg("src/**/*");
      for (const file of files) {
        this.addWatchFile(file);
      }
    },
  };
}

function serve(): Plugin {
  let server: ChildProcess;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    name: "serve",
    writeBundle() {
      if (server) return;
      server = spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default config;

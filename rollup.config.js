import { register } from "ts-node";

register({
  compilerOptions: {
    module: "CommonJS",
  },
});

module.exports = require("./rollup.config.ts");

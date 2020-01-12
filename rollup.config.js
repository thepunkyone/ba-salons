import svg from "rollup-plugin-svg";

export default {
  input: "src/input.js",
  output: { file: "dist/output.js", format: "iife" },
  plugins: [svg()]
};

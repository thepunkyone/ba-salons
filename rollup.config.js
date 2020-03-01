import svg from "rollup-plugin-svg";
import copy from "rollup-plugin-copy-glob";
import babel from "rollup-plugin-babel";

export default {
  input: "src/js/input.js",
  output: { file: "dist/js/output.js", format: "iife" },
  plugins: [
    svg(),
    copy(
      [
        { files: "src/favicon.ico", dest: "dist/" },
        { files: "src/images/**", dest: "dist/images/" },
        { files: "src/styles/fonts/**", dest: "dist/styles/fonts/" }
      ],
      { verbose: false, watch: false }
    ),
    babel({
      exclude: "node_modules/**"
    })
  ],
  watch: {
    exclude: ["node_modules/**"]
  }
};

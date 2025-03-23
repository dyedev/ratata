import prettierPluginSvelte from "prettier-plugin-svelte";

export default {
  plugins: [prettierPluginSvelte],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

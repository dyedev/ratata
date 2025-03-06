import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    template: "./index.html",
  },
  tools: {
    postcss: (config, { addPlugins }) => {
      addPlugins(tailwindcss);
    },
  },
  source: {
    entry: {
      index: "./src/main.ts",
    },
  },
});

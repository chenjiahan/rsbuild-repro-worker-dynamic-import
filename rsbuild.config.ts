import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    targets: ['web-worker'],
    distPath: {
      root: "./rsbuild-dist",
    },
  },
});

import { defineConfig } from "@rslib/core"

export default defineConfig({
  lib: [
    {
      format: "esm",
      dts: true,
      bundle: true,
    },
  ],
  output: {
    target: "web",
    distPath: {
      root: "./dist",
    },
    copy: [
      {
        from: "./src/styles",
        to: "./styles",
      },
    ],
  },
})

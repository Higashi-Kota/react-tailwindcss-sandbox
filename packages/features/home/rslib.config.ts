import { defineConfig } from "@rslib/core"

export default defineConfig({
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  lib: [
    {
      format: "esm",
      dts: true,
      bundle: true,
      autoExtension: true,
      syntax: "esnext",
    },
  ],
  output: {
    target: "web",
    distPath: {
      root: "./dist",
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
      "react/jsx-runtime": "react/jsx-runtime",
      "@internal/ui": "@internal/ui",
    },
  },
  tools: {
    swc: {
      jsc: {
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
    },
  },
})

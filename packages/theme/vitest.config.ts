import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      include: ["**/src/**/*.ts"],
      exclude: ["**/src/index.ts", "**/src/styles/**"],
    },
    exclude: ["node_modules", "dist"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})

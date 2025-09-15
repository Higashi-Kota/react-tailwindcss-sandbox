import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/_mocks/vitest.setup.ts"],
    coverage: {
      provider: "v8",
      include: ["**/src/**/*.{ts,tsx}"],
      exclude: ["**/src/main.tsx", "**/src/test/**", "**/src/vite-env.d.ts"],
    },
    exclude: ["node_modules", "dist"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})

import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg", "icons/*.png"],
      manifest: {
        name: "React Boilerplate App",
        short_name: "React App",
        description: "A modern React application with TypeScript and Vite",
        theme_color: "#3b82f6",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/pages": resolve(__dirname, "./src/pages"),
      "@/routes": resolve(__dirname, "./src/routes"),
      "@/styles": resolve(__dirname, "./src/styles"),
      "@/features": resolve(__dirname, "./src/features"),
      "@/layouts": resolve(__dirname, "./src/layouts"),
    },
  },
  server: {
    port: 3000,
    open: true,
    // Watch files in the monorepo for hot reload
    watch: {
      // Watch files outside of the current package for changes
      ignored: ['!**/node_modules/**', '!**/.git/**'],
      // Use polling for better cross-platform compatibility in monorepos
      usePolling: false,
      // Increase the interval for better performance
      interval: 100,
    },
    fs: {
      // Allow serving files from the monorepo root
      allow: ['../../../'],
    },
  },
  preview: {
    port: 3000,
  },
  // Vite 7 optimizations
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    sourcemap: true,
  },
})

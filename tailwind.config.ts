import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import { themePreset } from "./packages/theme/src/presets/tailwind"

/**
 * VSCode の Tailwind CSS IntelliSense用にルートレベルに配置
 */
const config: Config = {
  presets: [themePreset],
  content: [
    "./packages/apps/*/src/**/*.{js,ts,jsx,tsx}",
    "./packages/features/*/src/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [tailwindcssAnimate],
}

export default config

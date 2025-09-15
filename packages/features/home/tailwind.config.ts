import themePreset from "@internal/theme"
import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [themePreset],
  plugins: [tailwindcssAnimate],
}

export default config

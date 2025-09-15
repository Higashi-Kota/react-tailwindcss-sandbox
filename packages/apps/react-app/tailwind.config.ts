import { themePreset } from "@internal/theme"
import type { Config } from "tailwindcss"

const config: Config = {
  presets: [themePreset],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
}

export default config

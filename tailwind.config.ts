import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a365d",
          light: "#2d4a7c",
          dark: "#122845",
        },
        green: {
          DEFAULT: "#4ade80",
          light: "#86efac",
          dark: "#22c55e",
        },
        gray: {
          light: "#f8fafc",
          DEFAULT: "#64748b",
          dark: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

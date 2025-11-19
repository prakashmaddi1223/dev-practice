import type { Config } from "tailwindcss";

export default {
content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/Components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        loPrimary: "#38BDF8",      // cyan
        loPrimaryDark: "#0F172A",  // deep navy
        loAccent: "#8B5CF6",       // violet
        loAccentGreen: "#22C55E",  // success
        loBg: "#020617",           // almost black
      },
      boxShadow: {
        "glow": "0 0 40px rgba(56, 189, 248, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
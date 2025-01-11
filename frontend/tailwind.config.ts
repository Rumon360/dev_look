import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
        muted: "var(--muted)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0 1600px" },
          "100%": { backgroundPosition: "1600px 0" },
        },
      },
      animation: {
        "gradient-text": "gradient-move 3s infinite linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

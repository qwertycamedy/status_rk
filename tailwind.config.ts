import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        show: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        showWithTranslate: {
          "0%": {
            opacity: "0",
            transform: `translate(0, 300%)`,
          },
          "50%": {
            opacity: "0",
            transform: `translate(0, 300%)`,
          },
          "100%": {
            opacity: "1",
            transform: `translate(0, 0)`,
          },
        },
      },
      animation: {
        show: "show 1s ease-in-out",
        show_main_title: "showWithTranslate 2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

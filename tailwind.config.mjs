import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        moon: {
          950: '#0e0e1a',
          900: '#141425',
          800: '#1e1e35',
          700: '#2d2b55',
          600: '#444275',
          500: '#7c78c8',
          400: '#a9a5e0',
          300: '#c8c5f0',
          200: '#e0def8',
        },
        accent: {
          violet: '#b4a5e8',
          pink: '#e8a5c8',
          rose: '#f0c5d8',
        }
      },
    },
  },
  plugins: [],
};

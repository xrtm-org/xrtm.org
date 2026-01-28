/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
  corePlugins: {
    preflight: false, // Docusaurus has its own reset
  },
};

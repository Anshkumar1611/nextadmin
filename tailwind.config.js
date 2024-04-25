/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151c2c",
        secondary: "#182237",
        links: "#2e374a",
        white: "#ffffff",
        soft: "#b7bac1",
        done: "#f7cb7375",
        pending: "#afd6ee75",
        cancelled: "#f7737375",
        gradientDark: "#182237",
        gradientLight: "#253352",
      },
    },
  },
  safelist: [
    'bg-pending',
    'bg-done',
    'bg-cancelled'
  ],
  plugins: [],
};

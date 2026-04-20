/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6A4ED9",
        dark: "#1D1147",
        bg: "#F7F6FF",
        soft: "#E9E4FF",
        border: "#D9D2FF",
      },
    },
  },
  plugins: [],
};

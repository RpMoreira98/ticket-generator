/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata-regular", "sans-serif"],
        inconsolataBold: ["Inconsolata-bold", "sans-serif"],
        inconsolataSemiBold: ["Inconsolata-semiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
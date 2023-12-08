/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#A37D4C",
          text: "#333333",
          secondaryText: "#777777",
          border: "#E0E0E0",
          accent: "#2E6693",
          background: "#F1FFFF",
          card: "#FFFFFF",
        },
        dark: {
          primary: "#1D1D1D",
          text: "#FFFFFF",
          secondaryText: "#CCCCCC",
          border: "#333333",
          accent: "#6E9EC1",
          background: "#1D1D1D",
          card: "#2D2D2D",
        },
      },
    },
  },


  plugins: [require("daisyui")],
};

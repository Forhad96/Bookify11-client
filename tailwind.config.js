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
      // colors: {
      //   primary: "#a37d4c",
      //   // _hover: "#967142",
      // },
      colors: {
        // Light colors
        primary: "#a37d4c", // Regal blue
        secondary: "#f4b400", // Saffron
        accent: "#6379f4", // Purple
        background: "#f7fafc", // Gray 100
        text: "#3c4858", // Gray 700
        dark: "#1a202c", // Gray 900
        light: "#fff", // White

        // Dark colors
        primaryDark: "#563d78", // Darker regal blue
        secondaryDark: "#d08800", // Darker saffron
        accentDark: "#4255bd", // Darker purple
        backgroundDark: "#1a202c", // Gray 900
        textDark: "#fcfdfe", // White with slight opacity
        darkDark: "#000", // True black
        lightDark: "#a37d4c", // Regal blue (same as light mode for contrast)
      },
    },
  },
  plugins: [require("rippleui")],
  // rippleui: {
  //   themes: [
  //     {
  //       themeName: "light",
  //       colorScheme: "light",
  //       colors: {
  //         primary: "#235264",
  //         backgroundPrimary: "#964643",
  //       },
  //     },
  //     // {
  //     //   themeName: "dark",
  //     //   colorScheme: "dark",
  //     //   colors: {
  //     //     primary: "#573242",
  //     //     backgroundPrimary: "#1a1a1a",
  //     //   },
  //     // },
  //   ],
  // },
};

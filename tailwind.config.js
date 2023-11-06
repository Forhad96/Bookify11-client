/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        _primary: "#a37d4c",
        _hover: "#967142",
      },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#a37d4c",
          backgroundPrimary: "#964643",
        },
      },
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          primary: "#573242",
          backgroundPrimary: "#1a1a1a",
        },
      },
    ],
  },
};


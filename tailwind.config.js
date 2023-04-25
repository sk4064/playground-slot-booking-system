const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B60034",
        secondary: "#fff",
        layout: "rgb(39, 0, 11)",
      },
      fontFamily: {
        Shadows: ["Shadows Into Light", ...defaultTheme.fontFamily.sans],
        Irish: ["Irish Grover", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

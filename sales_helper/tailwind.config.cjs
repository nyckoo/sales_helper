/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#59ff00",
        oldWhite: "rgba(255, 255, 255, 0.85)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgba(58, 150, 9, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

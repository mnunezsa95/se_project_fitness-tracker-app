// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{jsx, js, tsx, ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Mona-Sans": ["Mona-Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        background: "#14181D",
        content: "#3586FF",
      },
    },
  },
  screens: {
    sm: { min: "0px", max: "640px" },
    md: { min: "641", max: "768px" },
    lg: { min: "760px", max: "1024px" },
    xl: { min: "1025px", max: "1280px" },
    xxl: { min: "1536px" },
  },
  scale: {
    2: "2.0",
  },
  plugins: [],
});

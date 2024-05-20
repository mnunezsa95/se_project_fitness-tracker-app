import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js, tsx, ts}"],
  darkMode: "class",
  daisyui: {
    themes: [],
  },
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
  // eslint-disable-next-line no-undef
  plugins: [daisyui],
};

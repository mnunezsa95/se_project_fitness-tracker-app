/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#14181D",
      blue: "#3586FF",
      grey: "#898D93",
      white: "#FFFFFF",
      green: "#25B142",
    },
    fontFamily: {
      monaSansRegular: ["Mona-Sans-Regular", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansRegularWide: ["Mona-Sans-RegularWide", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansRegularNarrow: ["Mona-Sans-RegularNarrow", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansMedium: ["Mona-Sans-Medium", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansMediumWide: ["Mona-Sans-MediumWide", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansMediumNarrow: ["Mona-Sans-MediumNarrow", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansBold: ["Mona-Sans-Bold", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansBoldWide: ["Mona-Sans-BoldWide", "Helvetica Neue", "Arial", "sans-serif"],
      monaSansBoldNarrow: ["Mona-Sans-BoldNarrow", "Helvetica Neue", "Arial", "sans-serif"],
    },
    screens: {
      sm: { min: "0px", max: "640px" },
      md: { min: "641", max: "768px" },
      lg: { min: "760px", max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
      xxl: { min: "1536px" },
    },
  },
  scale: {
    2: "2.0",
  },

  plugins: [],
};

import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      primary: {
        light: "#FFFFFF",
        main: "#3586FF",
        dark: "#14181D",
        contrastText: "#1D2026",
      },
    },
  });

  const value = { mode, toggleMode: () => setMode((prevMode) => !prevMode) };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;

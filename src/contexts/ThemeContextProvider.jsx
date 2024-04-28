import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);

  const lightPalette = {
    primary: {
      main: "#3586FF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#3586FF",
      secondary: "#3586FF",
    },
  };

  const darkPalette = {
    primary: {
      main: "#3586FF",
    },
    background: {
      default: "#14181D",
      paper: "#14181D",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#CCCCCC",
    },
  };

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      ...(mode ? darkPalette : lightPalette),
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

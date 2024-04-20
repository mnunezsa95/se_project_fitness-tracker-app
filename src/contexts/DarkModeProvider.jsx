import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import DarkModeContext from "./DarkModeContext";

function DarkModeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const value = { mode, toggleMode: () => setMode((prevMode) => !prevMode) };

  return (
    <DarkModeContext.Provider value={value}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkModeProvider;

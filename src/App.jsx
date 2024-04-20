import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import DarkModeSwitch from "./components/DarkModeSwitch";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper elevation={0} sx={{ height: "100vh" }} square>
          <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} />
          <h1 className="text-[50px]">Dark Mode</h1>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

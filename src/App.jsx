import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper } from "@mui/material";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper elevation={0} sx={{ height: "100vh" }} square>
          <DarkModeSwitch defaultMode={mode} onChange={handleModeChange} />
          <h1 className="text-[50px]">Dark Mode</h1>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

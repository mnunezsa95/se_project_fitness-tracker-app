import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper, Switch } from "@mui/material";
import { useState } from "react";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleToggleChange = () => {
    if (mode) setMode(false);
    else setMode(true);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper elevation={0} sx={{ height: "100vh" }} square>
          <Switch checked={mode} onChange={handleToggleChange} inputProps={{ "aria-label": "controlled" }} />
          <h1 className="text-[50px]">Dark Mode</h1>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

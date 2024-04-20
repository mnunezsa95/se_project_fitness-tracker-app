import { Paper, Switch } from "@mui/material";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const { mode, toggleMode } = useDarkMode();

  return (
    <Paper elevation={0} sx={{ height: "100vh" }} square>
      <h1>Dark Mode Tutorial</h1>
      <Switch checked={mode} onChange={toggleMode} inputProps={{ "aria-label": "controlled" }} />
    </Paper>
  );
}

export default App;

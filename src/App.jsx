import { Paper } from "@mui/material";

import DarkModeButton from "./components/DarkModeButton";

function App() {
  return (
    <Paper elevation={0} sx={{ height: "100vh" }} square>
      <DarkModeButton />
    </Paper>
  );
}

export default App;

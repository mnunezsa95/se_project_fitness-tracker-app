import { Paper } from "@mui/material";

import Header from "./components/Header";

function App() {
  return (
    <Paper elevation={0} sx={{ height: "100vh" }} square className="p-8">
      <Header />
    </Paper>
  );
}

export default App;

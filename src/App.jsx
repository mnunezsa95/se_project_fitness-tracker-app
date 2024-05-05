import { Paper } from "@mui/material";
import Home from "./components/Home";
import Profile from "./components/Profie";
import Workouts from "./components/Workouts";
import Statistics from "./components/Statistics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Paper elevation={0} sx={{ height: "100vh" }} square className="p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;

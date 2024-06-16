import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Workouts from "./components/Workouts";
import Statistics from "./components/Statistics";
import ThemeProvider from "./contexts/ThemeContextProvider.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <h1 className="dark:bg-background text-4xl font-Mona-Sans">Statistics</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

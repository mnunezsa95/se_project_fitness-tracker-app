import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Workouts from "./pages/Workouts.jsx";
import Statistics from "./pages/Statistics.jsx";
import Tools from "./pages/Tools.jsx";
import ThemeProvider from "./contexts/ThemeContextProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-background  min-h-screen w-full pt-5 px-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

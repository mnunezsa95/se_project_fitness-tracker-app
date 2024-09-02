import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Workouts from "./components/Workouts";
import Statistics from "./components/Statistics";
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
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

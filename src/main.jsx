import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/global/default.css";
import DarkModeProvider from "./contexts/DarkModeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);

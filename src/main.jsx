import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./contexts/ThemeContextProvider.jsx";
import "../src/global/default.css";
import "../src/global/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

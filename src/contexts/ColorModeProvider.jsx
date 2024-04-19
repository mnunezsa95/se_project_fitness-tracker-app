/* eslint-disable react/prop-types */
import { useState } from "react";
import { ColorModeContext } from "./ColorModeContext";

const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("dark");

  const handleColorMode = () => {
    let newColorModePreference = colorMode === "dark" ? "light" : "dark";
    setColorMode(newColorModePreference);
  };

  return <ColorModeContext.Provider value={{ colorMode, handleColorMode }}>{children}</ColorModeContext.Provider>;
};

export { ColorModeProvider };

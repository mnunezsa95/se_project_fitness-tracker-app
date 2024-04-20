// DarkModeSwitch.jsx
import React, { useState } from "react";
import { Switch } from "@mui/material";

const DarkModeSwitch = ({ defaultMode, onChange }) => {
  const [mode, setMode] = useState(defaultMode);

  const handleToggleChange = () => {
    const newMode = !mode;
    setMode(newMode);
    onChange(newMode);
  };

  return <Switch checked={mode} onChange={handleToggleChange} inputProps={{ "aria-label": "controlled" }} />;
};

export default DarkModeSwitch;

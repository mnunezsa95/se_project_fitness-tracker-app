// DarkModeSwitch.jsx
import React from "react";
import { Switch } from "@mui/material";

const DarkModeSwitch = ({ checked, onChange }) => {
  const handleToggleChange = () => {
    onChange(!checked);
  };

  return <Switch checked={checked} onChange={handleToggleChange} inputProps={{ "aria-label": "controlled" }} />;
};

export default DarkModeSwitch;

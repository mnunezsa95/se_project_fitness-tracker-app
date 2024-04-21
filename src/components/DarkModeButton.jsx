import { IconButton } from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

const DarkModeButton = () => {
  const { mode, toggleMode } = useDarkMode();
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleMode}>
      {mode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
    </IconButton>
  );
};

export default DarkModeButton;

import { IconButton } from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useTheme } from "@mui/material/styles";

const DarkModeButton = () => {
  const { mode, toggleMode } = useDarkMode();
  const theme = useTheme();

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleMode}>
      {mode ? (
        <LightModeRoundedIcon
          style={{
            fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
          }}
        />
      ) : (
        <DarkModeRoundedIcon
          style={{
            fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
          }}
        />
      )}
    </IconButton>
  );
};

export default DarkModeButton;

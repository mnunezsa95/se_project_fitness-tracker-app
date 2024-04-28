import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

const LoginButton = () => {
  const theme = useTheme();
  return (
    <IconButton>
      <LoginIcon
        style={{
          fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
        }}
      ></LoginIcon>
    </IconButton>
  );
};

export default LoginButton;

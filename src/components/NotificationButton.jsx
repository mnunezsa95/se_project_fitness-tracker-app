import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

const NotificationsButton = () => {
  const theme = useTheme();
  return (
    <IconButton>
      <NotificationsNoneIcon
        style={{
          fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
        }}
      ></NotificationsNoneIcon>
    </IconButton>
  );
};

export default NotificationsButton;

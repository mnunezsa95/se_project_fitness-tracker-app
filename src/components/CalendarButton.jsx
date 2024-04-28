import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CalendarButton = () => {
  const theme = useTheme();
  return (
    <IconButton>
      <CalendarMonthOutlinedIcon
        style={{
          fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
        }}
      ></CalendarMonthOutlinedIcon>
    </IconButton>
  );
};

export default CalendarButton;

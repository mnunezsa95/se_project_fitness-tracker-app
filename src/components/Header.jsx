import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IconButton } from "@mui/material";
import DarkModeButton from "./DarkModeButton";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="flex justify-end gap-x-3 ">
        <IconButton>
          <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
        </IconButton>
        <DarkModeButton />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;

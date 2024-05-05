import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeButton from "./DarkModeButton";
import SearchBar from "./SearchBar";
import CalendarButton from "./CalendarButton";
import LoginButton from "./LoginButton";
import NotificationsButton from "./NotificationButton";

import { validateToggleDrawer } from "../validation/propTypes";

const NavBar = ({ toggleDrawer }) => {
  NavBar.propTypes = validateToggleDrawer;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <DarkModeButton />
          <CalendarButton />
          <NotificationsButton />
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

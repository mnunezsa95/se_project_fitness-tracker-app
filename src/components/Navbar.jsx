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
import { useTheme } from "@emotion/react";
import { validateToggleDrawer } from "../validation/propTypes";

const NavBar = ({ toggleDrawer, handleOpenModal, handleCloseModal, openModal }) => {
  NavBar.propTypes = validateToggleDrawer;
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon
              style={{
                fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
              }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <DarkModeButton />
          <CalendarButton />
          <NotificationsButton />
          <LoginButton handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} openModal={openModal} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

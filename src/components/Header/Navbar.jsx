import { useState, useEffect, useCallback } from "react";
import DarkModeButton from "./DarkModeButton";
import CalendarButton from "./CalendarButton";
import NotificationButton from "./NotificationButton";
import HamburgerButton from "./HamburgerButton";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = useCallback(() => {
    setIsSideBarOpen((isSideBarOpen) => !isSideBarOpen);
  }, []);

  useEffect(() => {
    if (!isSideBarOpen) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") toggleSideBar();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isSideBarOpen, toggleSideBar]);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start">
        <HamburgerButton toggleSideBar={toggleSideBar} />
      </div>
      <div className="flex items-center gap-4 justify-end">
        <SearchBar />
        <DarkModeButton />
        <CalendarButton />
        <NotificationButton />
        <LoginButton />
        <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default NavBar;

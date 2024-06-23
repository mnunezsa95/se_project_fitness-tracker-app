import { useState, useEffect, useCallback } from "react";
import DarkModeButton from "./DarkModeButton";
import CalendarButton from "./CalendarButton";
import NotificationButton from "./NotificationButton";
import HamburgerButton from "./HamburgerButton";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";
import LoginModal from "../Modal/LoginModal";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleSideBar = useCallback(() => {
    setIsSideBarOpen((isSideBarOpen) => !isSideBarOpen);
  }, []);

  useEffect(() => {
    if (!isSideBarOpen && !isModalOpen) return;
    const handleEscClose = (evt) => {
      if (isSideBarOpen && evt.key === "Escape") toggleSideBar();
      else if (isModalOpen && evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isSideBarOpen, isModalOpen, toggleSideBar, handleCloseModal]);

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
        <LoginButton handleOpenModal={handleOpenModal} />
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <LoginModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default NavBar;

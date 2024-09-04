import { useState, useCallback, useRef } from "react";
import DarkModeButton from "./DarkModeButton";
import CalendarButton from "./CalendarButton";
import NotificationButton from "./NotificationButton";
import HamburgerButton from "./HamburgerButton";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { useEscapeKeyHandler } from "../../utils/functions";
import CalendarComponent from "./CalendarComponent"; // Adjust the import path as needed

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); // State for calendar visibility
  const modalRef = useRef(null);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);

  const handleCloseModal = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  }, []);

  const handleRedirect = () => {
    if (isLoginModalOpen) {
      handleCloseModal();
      handleOpenRegisterModal();
    } else if (isRegisterModalOpen) {
      handleCloseModal();
      handleOpenLoginModal();
    }
  };

  const toggleSideBar = useCallback(() => {
    setIsSideBarOpen((prev) => !prev);
  }, []);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  useEscapeKeyHandler({
    sideBar: {
      isOpen: isSideBarOpen,
      handleCloseModal: toggleSideBar,
      modalRef,
    },
    loginModal: {
      isOpen: isLoginModalOpen,
      handleCloseModal,
      modalRef,
    },
    registerModal: {
      isOpen: isRegisterModalOpen,
      handleCloseModal,
      modalRef,
    },
  });

  return (
    <div className="flex items-center justify-between w-full relative z-10">
      <div className="flex items-center justify-start">
        <HamburgerButton toggleSideBar={toggleSideBar} />
      </div>
      <div className="flex items-center gap-4 justify-end">
        <SearchBar />
        <DarkModeButton />
        <CalendarButton onClick={toggleCalendar} />
        {showCalendar && (
          <div className="absolute top-16 right-0 dark:bg-backgroundAccent bg-white rounded-lg p-4">
            <CalendarComponent />
          </div>
        )}
        <NotificationButton />
        <LoginButton handleOpenLoginModal={handleOpenLoginModal} />
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          handleCloseModal={handleCloseModal}
          handleRedirect={handleRedirect}
          modalRef={modalRef}
        />
        <RegisterModal
          isRegisterModalOpen={isRegisterModalOpen}
          handleCloseModal={handleCloseModal}
          handleRedirect={handleRedirect}
          modalRef={modalRef}
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

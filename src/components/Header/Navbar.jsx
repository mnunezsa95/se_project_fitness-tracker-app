import DarkModeButton from "./DarkModeButton";
import CalendarButton from "./CalendarButton";
import NotificiationButton from "./NotificationButton";
import HamburgerButton from "./HamburgerButton";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start">
        <HamburgerButton />
      </div>
      <div className="flex items-center gap-4 justify-end">
        <SearchBar />
        <DarkModeButton />
        <CalendarButton />
        <NotificiationButton />
      </div>
    </div>
  );
};

export default NavBar;

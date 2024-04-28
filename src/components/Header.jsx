import DarkModeButton from "./DarkModeButton";
import SearchBar from "./SearchBar";
import CalendarButton from "./CalendarButton";
import LoginButton from "./LoginButton";
import NotificationsButton from "./NotificationButton";

const Header = () => {
  return (
    <header>
      <div className="flex justify-end gap-x-3 ">
        <SearchBar />
        <DarkModeButton />
        <CalendarButton />
        <NotificationsButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;

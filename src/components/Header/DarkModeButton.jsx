import { useTheme } from "../../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("themeColor", newTheme);
  };

  return (
    <button type="button" onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <MoonIcon className="text-content size-10" />
      ) : (
        <SunIcon className="text-content size-10" />
      )}
    </button>
  );
};

export default DarkModeButton;

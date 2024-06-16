import { useTheme } from "../../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button type="button" onClick={handleThemeSwitch}>
      {theme === "dark" ? <MoonIcon className="size-10" /> : <SunIcon className="size-10" />}
    </button>
  );
};

export default DarkModeButton;

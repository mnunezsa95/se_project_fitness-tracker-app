import { Bars3Icon } from "@heroicons/react/24/outline";

const HamburgerButton = ({ toggleSideBar }) => {
  return (
    <label htmlFor="my-drawer" aria-label="close sidebar" className="dark:bg-background" onClick={toggleSideBar}>
      <Bars3Icon className="size-10" />
    </label>
  );
};

export default HamburgerButton;

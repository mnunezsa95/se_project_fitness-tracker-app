import { Bars3Icon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const HamburgerButton = ({ toggleSideBar }) => {
  return (
    <label
      htmlFor="my-drawer"
      aria-label="close sidebar"
      onClick={toggleSideBar}
    >
      <Bars3Icon className="text-content size-10" />
    </label>
  );
};

HamburgerButton.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
};

export default HamburgerButton;

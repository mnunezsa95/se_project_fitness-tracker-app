import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        readOnly
      />
      <div
        className={`drawer-side text-white w-1/5 h-full fixed top-0 left-${
          isOpen ? "0" : "-full"
        } transform transition-transform duration-300 ease-in-out`}
      >
        <label
          htmlFor="my-drawer"
          aria-label="toggle sidebar"
          className={`drawer-button ${isOpen ? "open" : ""}`}
          onClick={toggleSideBar}
        ></label>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="bg-black w-full h-full absolute top-0 left-0 opacity-00"
        >
          <div className="flex justify-end p-4">
            <button type="button" onClick={toggleSideBar}>
              <XMarkIcon className="size-8 text-white" />
            </button>
          </div>
        </label>

        <div className="p-4">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
};

export default SideBar;

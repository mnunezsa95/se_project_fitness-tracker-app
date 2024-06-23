import {
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PropTypes from "prop-types";
import SideBarItem from "./SideBarItem";

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  const sideBarItems = [
    {
      title: "Home",
      link: "/",
      image: HomeIcon,
    },
    {
      title: "Profile",
      link: "/profile",
      image: UserCircleIcon,
    },
    {
      title: "Workouts",
      link: "/workouts",
      image: FitnessCenterIcon,
    },
    {
      title: "Statistics",
      link: "/statistics",
      image: ChartBarIcon,
    },
  ];

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSideBarOpen}
        readOnly
      />
      <div
        className={`drawer-side text-white w-1/5 h-full fixed top-0 left-${
          isSideBarOpen ? "0" : "-full"
        } transform transition-transform duration-300 ease-in-out`}
      >
        <label
          htmlFor="my-drawer"
          aria-label="toggle sidebar"
          className={`drawer-button ${isSideBarOpen ? "open" : ""}`}
          onClick={toggleSideBar}
        ></label>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="dark:bg-background bg-content w-full h-full absolute top-0 left-0 opacity-00"
        >
          <div className="flex justify-end p-4">
            <button type="button" onClick={toggleSideBar}>
              <XMarkIcon className="size-8 text-white dark:text-content" />
            </button>
          </div>
          <div className="flex flex-col items-start pl-4">
            {sideBarItems.map((item, i) => (
              <SideBarItem item={item} key={i} />
            ))}
          </div>
        </label>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
};

export default SideBar;

import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header>
      <NavBar toggleDrawer={toggleDrawer} />
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
    </header>
  );
};

export default Header;

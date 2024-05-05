import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { validateToggleDrawer } from "../validation/propTypes";

import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AnalyticsIcon from "@mui/icons-material/Analytics";

function Sidebar({ toggleDrawer, state }) {
  Sidebar.propTypes = validateToggleDrawer;
  const images = [HomeIcon, AccountBoxIcon, FitnessCenterIcon, AnalyticsIcon];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Profile", "Workouts", "Statistics"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={index === 0 ? `/` : `/${text.toLowerCase()}`}>
              <ListItemIcon>{React.createElement(images[index])}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebar;

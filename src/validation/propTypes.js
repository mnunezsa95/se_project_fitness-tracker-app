import PropTypes from "prop-types";

const validateToggleDrawer = {
  toggleDrawer: PropTypes.func.isRequired,
};

const validateThemeContext = {
  children: PropTypes.node.isRequired,
};

export { validateToggleDrawer, validateThemeContext };

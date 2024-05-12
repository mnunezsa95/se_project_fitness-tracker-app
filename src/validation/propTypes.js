import PropTypes from "prop-types";

const validateToggleDrawer = {
  toggleDrawer: PropTypes.func.isRequired,
};

const validateThemeContext = {
  children: PropTypes.node.isRequired,
};

const validateModalComponent = {
  openModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func,
};

export { validateToggleDrawer, validateThemeContext, validateModalComponent };

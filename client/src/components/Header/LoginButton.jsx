import LoginIcon from "@mui/icons-material/Login";
import PropTypes from "prop-types";

const LoginButton = ({ handleOpenLoginModal }) => {
  return (
    <button type="button" onClick={handleOpenLoginModal}>
      <LoginIcon sx={{ fontSize: 40, color: "#3B82F6" }} />
    </button>
  );
};

LoginButton.propTypes = {
  handleOpenLoginModal: PropTypes.func.isRequired,
};

export default LoginButton;

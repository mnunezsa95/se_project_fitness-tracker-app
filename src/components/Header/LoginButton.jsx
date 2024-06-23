import LoginIcon from "@mui/icons-material/Login";
import PropTypes from "prop-types";

const LoginButton = ({ handleOpenModal }) => {
  return (
    <button type="button" onClick={handleOpenModal}>
      <LoginIcon sx={{ fontSize: 40, color: "#3B82F6" }} />
    </button>
  );
};

LoginButton.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default LoginButton;

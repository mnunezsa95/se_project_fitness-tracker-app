import Modal from "./Modal";
import PropTypes from "prop-types";

const LoginModal = ({ isLoginModalOpen, handleCloseModal, handleRedirect }) => {
  const handleLoginSubmit = () => {};

  return (
    <Modal
      modalTitle="Login"
      isModalOpen={isLoginModalOpen}
      onSubmit={handleLoginSubmit}
      onClose={handleCloseModal}
      hasRedirectButton={true}
      redirectButtonText="New User? Click Here!"
      handleRedirect={handleRedirect}
    >
      <input
        type="text"
        placeholder="Username"
        minLength="4"
        maxLength="16"
        required
        className="mb-4 pb-2 text-lg w-full placeholder:text-content text-content border-b-2 border-b-content outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        minLength="6"
        maxLength="30"
        required
        className="mb-4 pb-2 text-lg w-full placeholder:text-content text-content border-b-2 border-b-content outline-none"
      />
    </Modal>
  );
};

LoginModal.propTypes = {
  isLoginModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default LoginModal;

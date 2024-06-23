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
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="username"
        type="text"
        placeholder="Username"
        minLength="4"
        maxLength="16"
        required
      />
      <input
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="password"
        type="password"
        placeholder="Password"
        minLength="6"
        maxLength="30"
        required
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

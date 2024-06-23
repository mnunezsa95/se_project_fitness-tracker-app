import Modal from "./Modal";
import PropTypes from "prop-types";

const LoginModal = ({ isModalOpen, handleCloseModal }) => {
  const handleLoginSubmit = () => {};
  const handleRedirect = () => {};

  return (
    <Modal
      modalTitle="Login"
      isModalOpen={isModalOpen}
      onSubmit={handleLoginSubmit}
      onClose={handleCloseModal}
      hasRedirectButton={true}
      redirectButtonText="New User? Click Here!"
      handleRedirect={handleRedirect}
    >
      <input
        type="text"
        placeholder="Username"
        className="mb-4 pb-2 text-lg w-full placeholder:text-content text-content border-b-2 border-b-content outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 pb-2 text-lg w-full placeholder:text-content text-content border-b-2 border-b-content outline-none"
      />
    </Modal>
  );
};

LoginModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default LoginModal;

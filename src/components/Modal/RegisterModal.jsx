import Modal from "./Modal";
import PropTypes from "prop-types";

const RegisterModal = ({
  isRegisterModalOpen,
  handleCloseModal,
  handleRedirect,
}) => {
  const handleRegisterSubmit = () => {};

  return (
    <Modal
      modalTitle="Register"
      isModalOpen={isRegisterModalOpen}
      onSubmit={handleRegisterSubmit}
      onClose={handleCloseModal}
      hasRedirectButton={true}
      redirectButtonText="Already have an account? Click here!"
      handleRedirect={handleRedirect}
    >
      <input></input>
    </Modal>
  );
};

RegisterModal.propTypes = {
  isRegisterModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default RegisterModal;

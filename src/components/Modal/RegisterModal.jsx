import Modal from "./Modal";
import PropTypes from "prop-types";

const RegisterModal = ({
  isRegisterModalOpen,
  handleCloseModal,
  handleRedirect,
  modalRef,
}) => {
  const handleRegisterSubmit = () => {};

  return (
    <Modal
      modalTitle="Register"
      modalRef={modalRef}
      isModalOpen={isRegisterModalOpen}
      onSubmit={handleRegisterSubmit}
      onClose={handleCloseModal}
      hasRedirectButton={true}
      redirectButtonText="Already have an account? Click here!"
      handleRedirect={handleRedirect}
    >
      <input
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="fname"
        type="text"
        placeholder="First Name"
        minLength="1"
        maxLength="30"
        required
      />
      <input
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="lname"
        type="text"
        placeholder="Last Name"
        minLength="1"
        maxLength="30"
        required
      />
      <input
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="username"
        type="email"
        placeholder="Email"
        required
      />
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
      <input
        className="mb-6 pb-2 text-xl w-full dark:bg-backgroundAccent placeholder:text-xl placeholder:text-content text-content border-b-2 border-b-content outline-none border-opacity-60"
        name="password"
        type="password"
        placeholder="Confirm Password"
        minLength="6"
        maxLength="30"
        required
      />
    </Modal>
  );
};

RegisterModal.propTypes = {
  isRegisterModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  modalRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default RegisterModal;

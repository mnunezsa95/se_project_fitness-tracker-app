import Modal from "./Modal";

const LoginModal = () => {
  const handleLoginSubmit = () => {};
  const handleClose = () => {};
  const handleRedirect = () => {};

  return (
    <Modal
      modalTitle="Login"
      onSubmit={handleLoginSubmit}
      onClose={handleClose}
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

export default LoginModal;

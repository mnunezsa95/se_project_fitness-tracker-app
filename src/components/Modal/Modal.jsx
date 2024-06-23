import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const Modal = ({
  modalTitle,
  onSubmit,
  onClose,
  hasRedirectButton,
  redirectButtonText,
  handleRedirect,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="size-8 text-content" />
        </button>
        <h2 className="text-3xl text-content mb-8">{modalTitle}</h2>
        <form onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="mt-4 w-full bg-content text-white py-2 rounded hover:bg-content hover:opacity-70"
          >
            {modalTitle}
          </button>
          {hasRedirectButton && (
            <button
              className="mt-4 text-md text-content text-opacity-80"
              onClick={handleRedirect}
              type="button"
            >
              {redirectButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  hasRedirectButton: PropTypes.bool,
  handleRedirect: PropTypes.func,
  redirectButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;

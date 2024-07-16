import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const Modal = ({
  isModalOpen,
  modalTitle,
  onSubmit,
  onClose,
  hasRedirectButton,
  redirectButtonText,
  handleRedirect,
  children,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
      <div className="dark:bg-backgroundAccent bg-white p-6 rounded-lg shadow-lg w-1/3 relative z-40 font-Mona-Sans">
        <button
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="size-8 text-content" />
        </button>
        <h2 className="text-3xl font-Mona-Sans text-content mb-8">
          {modalTitle}
        </h2>
        <form onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="mt-4 w-full bg-content font-Mona-Sans text-xl text-black-800 py-2 rounded hover:bg-content hover:opacity-70"
          >
            {modalTitle}
          </button>
          {hasRedirectButton && (
            <button
              className="mt-4 text-lg font-Mona-Sans text-content"
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
  isModalOpen: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  hasRedirectButton: PropTypes.bool,
  handleRedirect: PropTypes.func,
  redirectButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;

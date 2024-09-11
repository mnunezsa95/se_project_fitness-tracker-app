import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const ToolModal = ({ isOpen, onClose, tool, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-30">
      <div className="dark:bg-backgroundAccent bg-white p-6 rounded-lg shadow-lg max-w-screen-sm w-1/2 relative z-40 font-Mona-Sans">
        <button
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="size-8 text-content" />
        </button>
        <h2 className="text-content text-3xl font-semibold mb-4">
          {tool.toolName}
        </h2>
        {children}
      </div>
    </div>
  );
};

ToolModal.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
  children: PropTypes.node,
};

export default ToolModal;

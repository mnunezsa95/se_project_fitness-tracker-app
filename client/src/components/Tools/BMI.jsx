import PropTypes from "prop-types";
import ToolModal from "./ToolModal";

const BMIModal = ({ isOpen, onClose, tool }) => {
  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <div>d</div>
    </ToolModal>
  );
};

BMIModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  tool: PropTypes.shape({
    toolName: PropTypes.string.isRequired,
    toolImg: PropTypes.string.isRequired,
    toolDescription: PropTypes.string.isRequired,
  }),
};

export default BMIModal;

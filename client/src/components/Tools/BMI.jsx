import PropTypes from "prop-types";
import ToolModal from "./ToolModal";

const BMI = ({ isOpen, onClose, tool }) => {
  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <div>1</div>
    </ToolModal>
  );
};

BMI.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default BMI;

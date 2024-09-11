import PropTypes from "prop-types";
import ToolModal from "./ToolModal";

const WaterIntake = ({ isOpen, onClose, tool }) => {
  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <div>3</div>
    </ToolModal>
  );
};

WaterIntake.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default WaterIntake;

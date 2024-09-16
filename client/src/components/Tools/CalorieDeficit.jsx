import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { calculateCalorieConsumption } from "../../utils/functions";

const CalorieDeficit = ({ isOpen, onClose, tool }) => {
  console.log(
    calculateCalorieConsumption(
      28,
      "Male",
      220,
      "lbs",
      "6'0\"",
      "ft",
      "lightly_active"
    )
  );

  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <div>2</div>
    </ToolModal>
  );
};

CalorieDeficit.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default CalorieDeficit;

import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { useState } from "react";
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
      <form className="text-content">
        <div className="flex text-md items-center gap-x-3">
          <span className="text-xl">Choose unit system:</span>
        </div>
        <div>
          <label className="text-xl">
            Enter your weight:
            <input
              name="age"
              placeholder="Age (15-80)"
              className="ml-1 w-12 bg-transparent rounded text-center placeholder:text-center  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              aria-label="age"
              value={""}
              onChange={""}
            />
          </label>
        </div>
      </form>
    </ToolModal>
  );
};

CalorieDeficit.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default CalorieDeficit;

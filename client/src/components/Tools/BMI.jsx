import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { useState } from "react";

const BMI = ({ isOpen, onClose, tool }) => {
  const [weightUnit, setWeightUnit] = useState("lbs");
  const handleToggleChange = (unit) => setWeightUnit(unit);

  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <form className="text-content">
        <div>
          <label className="block mb-4 text-md">
            Enter your weight:
            <input
              name="weight"
              placeholder={`Weight in ${weightUnit}`}
              className="ml-2  bg-transparent rounded placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
            />
          </label>
          <label className="flex text-md items-center gap-x-3">
            Choose unit:
            <div className="flex">
              <button
                type="button"
                onClick={() => handleToggleChange("lbs")}
                className={`w-11 py-1 px-2 rounded-l-md border dark:border-gray-300 border-content ${
                  weightUnit === "lbs"
                    ? "bg-content text-white"
                    : "dark:bg-white bg-gray-200 text-backgroundAccent hover:bg-gray-100"
                }`}
              >
                lbs
              </button>
              <button
                type="button"
                onClick={() => handleToggleChange("kgs")}
                className={`w-11 py-1 px-2 rounded-r-md border dark:border-gray-300 border-content ${
                  weightUnit === "kgs"
                    ? "bg-content text-white"
                    : "dark:bg-white bg-gray-200 text-backgroundAccent hover:bg-gray-100"
                }`}
              >
                kgs
              </button>
            </div>
          </label>
        </div>
      </form>
    </ToolModal>
  );
};

BMI.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default BMI;

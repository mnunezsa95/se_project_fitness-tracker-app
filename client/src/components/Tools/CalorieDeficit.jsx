import { useState } from "react";
import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { calculateCalorieConsumption } from "../../utils/functions";
import UnitButton from "./UnitButton";

const CalorieDeficit = ({
  isOpen,
  onClose,
  tool,
  handleUnitSystemChange,
  unitSystem,
}) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      calculateCalorieConsumption(
        age,
        gender,
        220,
        "lbs",
        "6'0\"",
        "ft",
        "lightly_active"
      )
    );
  };

  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <form className="text-content" onSubmit={handleFormSubmit}>
        <div className="flex text-md items-center gap-x-3">
          <span className="text-xl">Choose unit system:</span>
          <UnitButton
            handleUnitSystemChange={handleUnitSystemChange}
            unitSystem={unitSystem}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-xl">
            Enter your age:
            <input
              name="age"
              placeholder="Age (15-80)"
              className="ml-2 w-28 bg-transparent rounded text-center placeholder:text-left  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60 mt-4"
              aria-label="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="text-xl mt-4">
            Specify your gender:
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
              className="ml-2"
            />
            <label className="ml-1 mr-2">Male</label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
              className="ml-2"
            />
            <label className="ml-1">Female</label>
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
  unitSystem: PropTypes.string.isRequired,
  handleUnitSystemChange: PropTypes.func.isRequired,
};

export default CalorieDeficit;

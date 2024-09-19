import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import UnitButton from "./UnitButton";
import { useState } from "react";
import { calculateWaterIntake } from "../../utils/functions";

const WaterIntakeCalculator = ({
  isOpen,
  onClose,
  tool,
  unitSystem,
  handleUnitSystemChange,
}) => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("lightly_active");
  const [waterIntakeValue, setWaterIntakeValue] = useState("");
  const isFormIncomplete = !age || !weight;

  const handleCalculateWaterIntake = (e) => {
    e.preventDefault();
    const waterIntakeValue = calculateWaterIntake(
      weight,
      unitSystem === "imperial" ? "lb" : "kg",
      activityLevel
    );
    setWaterIntakeValue(waterIntakeValue);
  };
  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <UnitButton
        handleUnitSystemChange={handleUnitSystemChange}
        unitSystem={unitSystem}
      />
      <form className="text-content">
        <div className="flex flex-col mt-2">
          <label className="text-xl mt-2">
            Enter your age:
            <input
              name="age"
              placeholder="Age (15-80)"
              className="ml-2 w-28 bg-transparent rounded text-center placeholder:text-center placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              aria-label="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="text-xl mt-2">
            Enter your weight:
            <input
              name="weight"
              placeholder={unitSystem === "imperial" ? "lbs" : "kg"}
              className="ml-2 w-20 bg-transparent rounded text-center placeholder:text-center placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="text-xl mt-2">
            Activity:
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="text-[19px] overflow-hidden ml-2 bg-transparent rounded text-center border-b-2 border-b-content outline-none border-opacity-60"
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="lightly_active">
                Lightly active (light exercise 1-3 times/week)
              </option>
              <option value="moderately_active">
                Moderately active (moderate exercise 3-5 times/week)
              </option>
              <option value="very_active">
                Very active (hard exercise 6-7 times/week)
              </option>
              <option value="extra_active">
                Extra active (very intense exercise daily)
              </option>
            </select>
          </label>
        </div>
        <button
          type="button"
          className={`mt-5 w-full py-2 bg-content text-white rounded hover:opacity-80 ${
            isFormIncomplete ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleCalculateWaterIntake}
          disabled={isFormIncomplete}
        >
          Calculate
        </button>
        {waterIntakeValue !== "" ? (
          <div className="mt-4 flex flex-col items-center">
            <p>Recommended Water Intake:</p>
            <p>
              {waterIntakeValue} L/day (~{waterIntakeValue * 1000} mL/day, ~
              {Math.round(waterIntakeValue * 33.814)} oz/day, ~
              {Math.round(waterIntakeValue * 4.22675)} cup/day)
            </p>
          </div>
        ) : null}
      </form>
    </ToolModal>
  );
};

WaterIntakeCalculator.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
  unitSystem: PropTypes.string.isRequired,
  handleUnitSystemChange: PropTypes.func.isRequired,
};

export default WaterIntakeCalculator;

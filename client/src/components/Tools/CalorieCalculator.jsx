import { useState } from "react";
import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { calculateCalorieConsumption } from "../../utils/functions";
import UnitButton from "./UnitButton";

const CalorieCalculator = ({
  isOpen,
  onClose,
  tool,
  handleUnitSystemChange,
  unitSystem,
}) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("lightly_active");
  const [calorieValue, setCalorieValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const calorieValue = calculateCalorieConsumption(
      age,
      gender,
      weight,
      unitSystem === "imperial" ? "lbs" : "kgs",
      height,
      unitSystem === "imperial" ? "ft" : "m",
      activityLevel
    );

    setCalorieValue(calorieValue);
  };

  // Check if any of the required fields are empty
  const isFormIncomplete = !age || !height || !weight;

  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <form className="text-content">
        <div className="flex text-md items-center gap-x-3">
          <span className="text-xl">Choose unit system:</span>
          <UnitButton
            handleUnitSystemChange={handleUnitSystemChange}
            unitSystem={unitSystem}
          />
        </div>
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
            <label className="ml-1 mr-2">Female</label>
          </label>
          <label className="text-xl mt-2">
            Enter your height:
            <input
              name="height"
              placeholder={unitSystem === "imperial" ? "ft'in" : "cm"}
              className="ml-2 w-20 bg-transparent rounded text-center placeholder:text-center placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
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
          onClick={handleFormSubmit}
          disabled={isFormIncomplete}
        >
          Calculate
        </button>
      </form>
      {calorieValue !== "" ? (
        <div className="mt-4 flex flex-col items-center justify-center w-full h-full text-content">
          <div className="flex justify-center">
            <p className="w-36 text-left">Maintain Weight</p>
            <span className="w-8 text-center">&#x2192;</span>
            <p>{calorieValue} Cal/Day</p>
          </div>
          <div className="flex justify-center">
            <p className="w-36 text-left">
              Lose {unitSystem === "Imperial" ? "1 lb" : "0.45 kg"}/week
            </p>
            <span className="w-8 text-center">&#x2192;</span>
            <p>{calorieValue - 500} Cal/Day</p>
          </div>
          <div className="flex  justify-center">
            <p className="w-36 text-left">
              Lose {unitSystem === "Imperial" ? "2 lb" : "0.90 kg"}/week
            </p>
            <span className="w-8 text-center">&#x2192;</span>
            <p>{calorieValue - 1000} Cal/Day</p>
          </div>
        </div>
      ) : null}
    </ToolModal>
  );
};

CalorieCalculator.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
  unitSystem: PropTypes.string.isRequired,
  handleUnitSystemChange: PropTypes.func.isRequired,
};

export default CalorieCalculator;

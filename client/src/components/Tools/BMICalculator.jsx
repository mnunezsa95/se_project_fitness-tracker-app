import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { useState } from "react";
import { calculateBMI, classifyBMI } from "../../utils/functions";
import bmiIndexChartDark from "../../images/bmi-index-chart-dark.svg";
import bmiIndexChartLight from "../../images/bmi-index-chart-light.svg";

import { useTheme } from "../../contexts/ThemeContext";

const BMICalculator = ({ isOpen, onClose, tool }) => {
  const { theme } = useTheme();
  const [unitSystem, setUnitSystem] = useState("imperial");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleUnitSystemChange = (system) => setUnitSystem(system);

  const handleCalculateBMI = () => {
    const BMIValue = calculateBMI(
      weight,
      unitSystem === "imperial" ? "lbs" : "kgs",
      height,
      unitSystem === "imperial" ? "ft" : "m"
    );
    setBmi(BMIValue);
  };

  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <form className="text-content">
        <div className="flex text-md items-center gap-x-3">
          <span className="text-xl">Choose unit system:</span>
          <div>
            <button
              type="button"
              onClick={() => handleUnitSystemChange("imperial")}
              className={`w-20 py-1 px-2 rounded-l-md border dark:border-gray-300 border-content ${
                unitSystem === "imperial"
                  ? "bg-content text-white"
                  : "dark:bg-white bg-gray-200 text-backgroundAccent hover:bg-gray-100"
              }`}
              aria-pressed={unitSystem === "imperial"}
            >
              Imperial
            </button>
            <button
              type="button"
              onClick={() => handleUnitSystemChange("metric")}
              className={`w-20 py-1 px-2 rounded-r-md border dark:border-gray-300 border-content ${
                unitSystem === "metric"
                  ? "bg-content text-white"
                  : "dark:bg-white bg-gray-200 text-backgroundAccent hover:bg-gray-100"
              }`}
              aria-pressed={unitSystem === "metric"}
            >
              Metric
            </button>
          </div>
        </div>
        <div className="flex gap-x-6 mt-4 ">
          <label className="text-xl">
            Enter your weight:
            <input
              name="weight"
              placeholder={unitSystem === "imperial" ? "lbs" : "kgs"}
              className="ml-1 w-12 bg-transparent rounded text-center placeholder:text-center  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              aria-label={`Weight in ${
                unitSystem === "imperial" ? "lbs" : "kgs"
              }`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="block text-xl">
            Enter your height:
            <input
              name="height"
              placeholder={unitSystem === "imperial" ? "ft'in" : "cm"}
              className="ml-1 w-12 bg-transparent rounded text-center placeholder:text-center  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
              aria-label="Height in feet or centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div className="flex justify-center">
          <img
            src={theme === "dark" ? bmiIndexChartDark : bmiIndexChartLight}
            className="mt-3 w-[450px] h-auto"
          />
        </div>
        <button
          type="button"
          className="mt-5 w-full py-2 bg-content text-white rounded hover:opacity-80"
          onClick={handleCalculateBMI}
        >
          Calculate
        </button>
        {bmi !== null && (
          <div className="mt-4 text-xl">
            {!isNaN(bmi) ? (
              <>
                <span>Your BMI: </span>
                <span className="font-Mona-Sans">{bmi}</span>
                <p>You are in the &ldquo;{classifyBMI(bmi)}&rdquo; category</p>
              </>
            ) : (
              <p className="text-red-500">
                Invalid input. Please enter valid values for weight & height.
              </p>
            )}
          </div>
        )}
      </form>
    </ToolModal>
  );
};

BMICalculator.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default BMICalculator;

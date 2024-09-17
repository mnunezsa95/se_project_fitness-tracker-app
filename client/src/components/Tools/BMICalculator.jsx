import PropTypes from "prop-types";
import ToolModal from "./ToolModal";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { calculateBMI, classifyBMI } from "../../utils/functions";
import UnitButton from "./UnitButton";
import bmiIndexChartDark from "../../images/bmi-index-chart-dark.svg";
import bmiIndexChartLight from "../../images/bmi-index-chart-light.svg";

const BMICalculator = ({
  isOpen,
  onClose,
  tool,
  unitSystem,
  handleUnitSystemChange,
}) => {
  const { theme } = useTheme();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleCalculateBMI = () => {
    const BMIValue = calculateBMI(
      weight,
      unitSystem === "imperial" ? "lbs" : "kgs",
      height,
      unitSystem === "imperial" ? "ft" : "m"
    );
    setBmi(BMIValue);
  };

  const isButtonDisabled = weight === "" || height === "";

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
        <div className="flex gap-x-6 mt-4 ">
          <label className="text-xl">
            Enter your weight:
            <input
              name="weight"
              placeholder={unitSystem === "imperial" ? "lbs" : "kg"}
              className="ml-2 w-12 bg-transparent rounded text-center placeholder:text-center  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
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
              className="ml-2 w-12 bg-transparent rounded text-center placeholder:text-center  placeholder:text-content placeholder:opacity-75 border-b-2 border-b-content outline-none border-opacity-60"
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
          className={`mt-5 w-full py-2 bg-content text-white rounded hover:opacity-80 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleCalculateBMI}
          disabled={isButtonDisabled}
        >
          Calculate
        </button>
        {bmi !== null && (
          <div className="mt-4 text-xl">
            <span>Your BMI: </span>
            <span className="font-Mona-Sans">{bmi}</span>
            <p>You are in the &ldquo;{classifyBMI(bmi)}&rdquo; category</p>
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
  unitSystem: PropTypes.string.isRequired,
  handleUnitSystemChange: PropTypes.func.isRequired,
};

export default BMICalculator;

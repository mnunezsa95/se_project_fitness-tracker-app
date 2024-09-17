import PropTypes from "prop-types";

const UnitButton = ({ unitSystem, handleUnitSystemChange }) => {
  return (
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
  );
};

UnitButton.propTypes = {
  unitSystem: PropTypes.string.isRequired,
  handleUnitSystemChange: PropTypes.func.isRequired,
};

export default UnitButton;

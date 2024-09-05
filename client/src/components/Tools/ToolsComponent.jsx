import ToolCard from "./ToolCard";
import bmiCalculatorDarkIcon from "../../images/bmi-calculator-dark.svg";
import calorieCalculatorDarkIcon from "../../images/calories-calculator-dark.svg";
import waterCalculatorDarkIcon from "../../images/h2o-calculator-dark.svg";
import bmiCalculatorLightIcon from "../../images/bmi-calculator-light.svg";
import caloreCalculatorLightIcon from "../../images/calories-calculator-light.svg";
import waterCalculatorLightIcon from "../../images/h2o-calculator-light.svg";
import { useTheme } from "../../contexts/ThemeContext";

const ToolsComponent = () => {
  const { theme } = useTheme();

  const tools = [
    {
      toolName: "BMI Calculator",
      toolImg:
        theme === "dark" ? bmiCalculatorDarkIcon : bmiCalculatorLightIcon,
      toolDescription:
        "A BMI (Body Mass Index) calculator estimates whether a person has a healthy body weight for their height",
    },
    {
      toolName: "Caloric Deficit Calculator",
      toolImg:
        theme === "dark"
          ? calorieCalculatorDarkIcon
          : caloreCalculatorLightIcon,
      toolDescription:
        "A CDC (Caloric Deficit Calculator) estimates the number of calories needed to lose weight.",
    },
    {
      toolName: "Daily Water Intake Calculator",
      toolImg:
        theme === "dark" ? waterCalculatorDarkIcon : waterCalculatorLightIcon,
      toolDescription:
        "A Daily Water Intake Calculator estimates how much water to drink each day based on weight, age, activity level, and climate.",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[90vh] dark:text-content text-backgroundAccent">
      <div className="flex gap-20">
        {tools.map((tool, i) => {
          return <ToolCard tool={tool} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ToolsComponent;

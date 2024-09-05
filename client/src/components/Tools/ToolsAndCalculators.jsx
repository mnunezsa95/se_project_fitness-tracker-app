import ToolCard from "./ToolCard";
import bmiCalculatorIcon from "../../images/bmi-calculator.svg";

const tools = [
  {
    toolName: "BMI Calculator",
    toolImg: bmiCalculatorIcon,
  },
  {
    toolName: "Caloric Deficit Calculator",
    toolImg: null,
  },
  {
    toolName: "Daily Water Intake Calculator",
    toolImg: null,
  },
];

const ToolsAndCalculators = () => {
  return (
    <div className="flex justify-center text-content">
      <div className="flex gap-20">
        {tools.map((tool, i) => {
          return <ToolCard tool={tool} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ToolsAndCalculators;

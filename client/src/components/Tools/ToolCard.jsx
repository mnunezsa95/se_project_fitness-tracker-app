import PropTypes from "prop-types";

const ToolCard = ({ tool }) => {
  return (
    <div className="flex flex-col text-center max-w-[400px] p-8 border-4 rounded-xl dark:border-content dark:bg-backgroundAccent bg-content border-backgroundAccent">
      <h3 className="text-3xl font-bold mb-10 rounded-lg border-4 flex items-center justify-center min-h-24 dark:bg-backgroundAccent dark:border-content border-backgroundAccent">
        {tool.toolName}
      </h3>
      <button
        type="button"
        className="bg-transparent border-none cursor-pointer self-center"
      >
        <img src={tool.toolImg} alt={tool.toolName} className="w-64 h-auto" />
      </button>
      <p className="pt-4 self-center">{tool.toolDescription}</p>
    </div>
  );
};

ToolCard.propTypes = {
  tool: PropTypes.shape({
    toolName: PropTypes.string.isRequired,
    toolImg: PropTypes.string.isRequired,
    toolDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToolCard;

import PropTypes from "prop-types";

const ToolCard = ({ tool }) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-Mona-Sans">{tool.toolName}</h3>
      <button
        type="button"
        className="bg-transparent border-none cursor-pointer"
      >
        <img src={tool.toolImg} alt="" className="w-28 h-auto" />
      </button>
    </div>
  );
};

ToolCard.propTypes = {
  tool: PropTypes.shape({
    toolName: PropTypes.string.isRequired,
    toolImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToolCard;

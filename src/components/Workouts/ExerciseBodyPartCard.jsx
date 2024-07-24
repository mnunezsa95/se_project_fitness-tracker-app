import PropTypes from "prop-types";

const ExerciseBodyPartCard = ({
  bodyPartName,
  bodyPartImage,
  bodyPart,
  setBodyPart,
}) => {
  const handleClick = () => {
    setBodyPart(bodyPartName);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center gap-y-5 ${
        bodyPartName === bodyPart ? "border-t-2 border-t-content" : ""
      }`}
    >
      <img
        className="text-center w-40 min-h-[128px]"
        src={bodyPartImage}
        alt={bodyPartName}
      />
      <p className="font-Mona-Sans text-2xl text-content text-center">
        {bodyPartName}
      </p>
    </button>
  );
};

ExerciseBodyPartCard.propTypes = {
  bodyPartName: PropTypes.string.isRequired,
  bodyPartImage: PropTypes.string,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default ExerciseBodyPartCard;

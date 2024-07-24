import PropTypes from "prop-types";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="">
      <img
        src={exercise?.gifUrl}
        alt={exercise?.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{exercise?.name}</h3>
        <p className="text-gray-600">Target: {exercise?.target}</p>
        <p className="text-gray-600">Equipment: {exercise?.equipment}</p>
        <p className="text-gray-600">Body Part: {exercise?.bodyPart}</p>
      </div>
    </div>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExerciseCard;

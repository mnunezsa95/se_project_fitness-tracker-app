import PropTypes from "prop-types";
import { formatWords } from "../utils/functions";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="mx-auto">
      <img
        src={exercise?.gifUrl}
        alt={exercise?.name}
        className="rounded-2xl"
      />
      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-content font-Mona-Sans ">
          {formatWords(exercise?.name)}
        </h3>
        <p className="text-content text-lg">
          Target: {formatWords(exercise?.target)}
        </p>
        <p className="text-content text-lg">
          Equipment: {formatWords(exercise?.equipment)}
        </p>
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

import PropTypes from "prop-types";
import ExerciseMuscleTag from "./ExerciseMuscleTag";
import { formatWords } from "../utils/functions";

const ExerciseCard = ({ exercise }) => {
  const muscleGroups = [...exercise.secondaryMuscles].slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-xs">
      <button type="button">
        <img
          src={exercise?.gifUrl}
          alt={exercise?.name}
          className="rounded-2xl w-full"
        />
      </button>
      <div className="flex flex-wrap gap-2 mt-2">
        {muscleGroups.map((muscle, index) => (
          <ExerciseMuscleTag key={index} muscle={muscle} />
        ))}
      </div>
      <div className="mt-1">
        <p
          className="text-3xl font-bold text-content font-Mona-Sans text-wrap"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {formatWords(exercise?.name)}
        </p>
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
    secondaryMuscles: PropTypes.arrayOf(PropTypes.string), // Ensure secondaryMuscles is properly defined
  }).isRequired,
};

export default ExerciseCard;

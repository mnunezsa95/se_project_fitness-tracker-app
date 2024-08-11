import PropTypes from "prop-types";

const ExerciseMuscleTag = ({ muscle }) => {
  return (
    <div className="dark:bg-backgroundAccent bg-content px-2 py-1 rounded-lg">
      <p className="dark:text-content text-white font-Mona-Sans text-md">
        {muscle}
      </p>
    </div>
  );
};

ExerciseMuscleTag.propTypes = {
  muscle: PropTypes.string.isRequired,
};

export default ExerciseMuscleTag;

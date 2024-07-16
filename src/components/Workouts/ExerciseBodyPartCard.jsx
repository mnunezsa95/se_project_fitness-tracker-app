import PropTypes from "prop-types";

const ExerciseBodyPartCard = ({ bodyPartName, bodyPartImage }) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <img
        className="text-center w-40 min-h-[128px]"
        src={bodyPartImage}
        alt={bodyPartName}
      />
      <p className="font-Mona-Sans text-2xl text-content text-center">
        {bodyPartName}
      </p>
    </div>
  );
};

ExerciseBodyPartCard.propTypes = {
  bodyPartName: PropTypes.string.isRequired,
  bodyPartImage: PropTypes.string,
};

export default ExerciseBodyPartCard;

import PropTypes from "prop-types";
import { formatWords } from "../../utils/functions";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ExerciseModal = ({ isOpen, onClose, exercise, modalRef }) => {
  if (!isOpen) return null;

  const exerciseInstructions = exercise?.instructions || [];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center z-30">
      <div
        ref={modalRef}
        className="dark:bg-backgroundAccent bg-white p-6 rounded-lg shadow-lg max-w-screen-sm w-full relative z-40 font-Mona-Sans"
      >
        <button
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="size-8 text-content" />
        </button>
        <h2 className="text-content text-3xl font-semibold mb-4">
          {formatWords(exercise.name)}
        </h2>
        <div className="flex justify-center">
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-auto rounded-lg items-center"
          />
        </div>
        <div>
          <p className="text-content pt-4 pb-2 font-Mona-Sans font-bold text-lg">
            Exercise Instructions:
          </p>
          {exerciseInstructions.map((inst, index) => (
            <p
              className="text-content font-Mona-Sans font-bold text-"
              key={index}
            >{`${index + 1}) ${inst}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

ExerciseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  modalRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default ExerciseModal;

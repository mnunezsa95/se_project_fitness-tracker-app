import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ExercisePagination from "./ExercisePagination";
import {
  exercisesURL,
  exerciseOptions,
  fetchData,
  limitParam,
} from "../../utils/fetchData";

const ExerciseLibrary = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          `${exercisesURL}?limit=${limitParam}`,
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `${exercisesURL}/bodyPart/${bodyPart}?limit=${limitParam}`,
          exerciseOptions
        );
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentExercises = exercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage
  );

  return (
    <div className="pt-10 mx-auto">
      {exercises.length !== 0 && (
        <h4 className="text-content text-xl font-Mona-Sans text-pretty">
          Found{" "}
          <span className="border-spacing-2 border-b-2 border-opacity-90 border-content">
            {exercises.length}
          </span>{" "}
          Matching the Search Criteria:
        </h4>
      )}
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      {exercises.length >= 9 ? (
        <ExercisePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </div>
  );
};

ExerciseLibrary.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default ExerciseLibrary;

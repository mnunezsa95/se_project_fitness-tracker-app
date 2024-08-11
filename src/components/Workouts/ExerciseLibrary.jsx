import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ExercisePagination from "./ExercisePagination";
import {
  exercisesURL,
  exerciseOptions,
  fetchData,
  limitParam,
} from "../utils/fetchData";

const ExerciseLibrary = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
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
    <div className="mt-20 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
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

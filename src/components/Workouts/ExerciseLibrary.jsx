import PropTypes from "prop-types";
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Pagination from "./ExercisePagination";

const ExerciseLibrary = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

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
        <Pagination
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
};

export default ExerciseLibrary;

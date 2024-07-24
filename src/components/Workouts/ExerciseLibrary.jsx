import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

const ExerciseLibrary = ({ exercises, setExercises, bodyPart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

ExerciseLibrary.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};
export default ExerciseLibrary;

import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import PropTypes from "prop-types";

const ExerciseLibrary = ({ exercises, setExercises, bodyPart }) => {
  return <div></div>;
};

ExerciseLibrary.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};
export default ExerciseLibrary;

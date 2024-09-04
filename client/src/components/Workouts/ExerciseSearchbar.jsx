import { useState, useEffect } from "react";
import {
  exercisesURL,
  exerciseOptions,
  fetchData,
  limitParam,
} from "../../utils/fetchData";
import PropTypes from "prop-types";

const ExerciseSearchbar = ({ exercises, setExercises }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        `${exercisesURL}?limit=${limitParam}`,
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });

      setExercises(searchedExercises);
    }
    setSearch("");
  };

  useEffect(() => {
    console.log(exercises);
  }, [exercises]);

  return (
    <form className="flex items-center space-x-2">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search Exercises..."
        className="px-3 py-1 border rounded-lg dark:bg-backgroundAccent  placeholder:text-md placeholder:text-content text-content outline-none border-content border-opacity-60 font-Mona-Sans"
      />
      <button
        type="submit"
        className="px-3 py-1 text-white bg-content rounded-lg shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-content font-Mona-Sans"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

ExerciseSearchbar.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
};

export default ExerciseSearchbar;

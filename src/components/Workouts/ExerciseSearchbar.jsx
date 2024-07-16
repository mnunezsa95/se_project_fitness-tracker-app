import { useState } from "react";
import { exercisesURL, exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseSearchbar = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(exercisesURL, exerciseOptions);
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

export default ExerciseSearchbar;

import { useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseSearchbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(exercisesData);
    }
  };

  return (
    <form className="flex items-center space-x-2">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search Exercises..."
        className="px-3 py-1 border rounded-lg dark:bg-backgroundAccent  placeholder:text-md placeholder:text-content text-content outline-none border-content border-opacity-60 font-Mona-Sans"
      />
      <button
        type="submit"
        className="px-3 py-1 text-white bg-content rounded-lg shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-content font-Mona-Sans"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default ExerciseSearchbar;

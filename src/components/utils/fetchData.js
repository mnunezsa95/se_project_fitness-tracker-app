export const exercisesURL = "https://exercisedb.p.rapidapi.com/exercises";
export const bodyPartsURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_EXERCISE_DB_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const exercisesURL = "https://exercisedb.p.rapidapi.com/exercises";
export const bodyPartsURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const limitParam = 3000;

const key1 = import.meta.env.VITE_EXERCISE_DB_API_KEY1;
const key2 = import.meta.env.VITE_EXERCISE_DB_API_KEY2;

const apiKeys = [key1, key2];

export const exerciseOptions = (apiKey) => ({
  method: "GET",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
});

export const fetchData = async (url) => {
  let data = null;

  for (const [index, apiKey] of apiKeys.entries()) {
    try {
      const response = await fetch(url, exerciseOptions(apiKey));
      if (response.ok) {
        data = await response.json();
        break;
      } else {
        console.log(`Network response was not ok with API ${index === 0 ? "Key1" : "Key2"}`);
      }
    } catch (error) {
      console.log(`Fetching with API key ${index === 0 ? "Key1" : "Key2"} failed: ${error.message}`);
    }
  }

  if (data === null) {
    throw new Error("All API keys failed");
  }

  return data;
};

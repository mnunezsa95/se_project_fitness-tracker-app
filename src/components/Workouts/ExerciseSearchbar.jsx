import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const ExerciseSearchbar = () => {
  const handleSubmit = () => {};
  const searchTerm = () => {};
  const handleChange = () => {};

  return (
    <div className="flex items-center justify-between pt-5">
      <div className="flex gap-2 items-center">
        <MonitorHeartIcon sx={{ fontSize: 40, color: "#3B82F6" }} />
        <h3 className="text-xl text-content font-Mona-Sans font-bold ">
          Exercise Library
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Exercises..."
          className="px-3 py-1 border rounded-lg dark:bg-backgroundAccent  placeholder:text-md placeholder:text-content text-content outline-none border-content border-opacity-60 font-Mona-Sans"
        />
        <button
          type="submit"
          className="px-3 py-1 text-white bg-content rounded-lg shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-content font-Mona-Sans"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ExerciseSearchbar;

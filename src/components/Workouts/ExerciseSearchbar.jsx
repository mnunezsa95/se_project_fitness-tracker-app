const ExerciseSearchbar = () => {
  const handleSubmit = () => {};
  const searchTerm = () => {};
  const handleChange = () => {};

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
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
  );
};

export default ExerciseSearchbar;

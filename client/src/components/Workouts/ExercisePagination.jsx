import PropTypes from "prop-types";

const ExercisePagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;

  const getPaginationRange = () => {
    let paginationRange = [];

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (currentPage <= 3) {
      paginationRange = [1, 2, 3, 4, totalPages];
    } else if (currentPage >= totalPages - 2) {
      paginationRange = [
        1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      paginationRange = [1, prevPage, currentPage, nextPage, totalPages];
    }

    return Array.from(new Set(paginationRange)).sort((a, b) => a - b);
  };

  const paginationRange = getPaginationRange();

  const handlePageChange = (page) => {
    onPageChange(page);
    setTimeout(() => {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex justify-center pt-14 pb-10">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-content text-white px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12"
      >
        Prev
      </button>

      {paginationRange.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`${
            page === currentPage
              ? "bg-content text-white"
              : "bg-gray-200 text-black"
          } px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-content text-white px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12"
      >
        Next
      </button>
    </div>
  );
};

ExercisePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default ExercisePagination;

import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;

  const getPaginationRange = () => {
    let paginationRange = [];

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (currentPage <= 3) {
      // If on the first page or near it, show 1, 2, 3, 4, 5
      paginationRange = [1, 2, 3, 4, totalPages];
    } else if (currentPage >= totalPages - 2) {
      // If on the last page or near it, show the last 5 pages
      paginationRange = [
        1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      // Otherwise, show 1, the previous page, the current page, the next page, and the last page
      paginationRange = [1, prevPage, currentPage, nextPage, totalPages];
    }

    // Ensure the page range does not include duplicates and is sorted
    return Array.from(new Set(paginationRange)).sort((a, b) => a - b);
  };

  const paginationRange = getPaginationRange();

  return (
    <div className="flex justify-center pt-14 pb-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="bg-content text-white px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12"
      >
        Prev
      </button>

      {paginationRange.map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="bg-content text-white px-3 py-2 rounded mx-1 flex items-center justify-center w-12 h-12"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

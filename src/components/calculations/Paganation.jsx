import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
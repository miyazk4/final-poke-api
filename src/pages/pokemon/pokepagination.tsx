import React from "react";

interface PokePagination {
  goToPreviousPage: (() => void) | null;
  goToNextPage: (() => void) | null;
}

const Pagination = ({ goToPreviousPage, goToNextPage }: PokePagination) => {
  return (
    <div>
      {goToPreviousPage && (
        <button type="button" onClick={goToPreviousPage}>
          Previous
        </button>
      )}
      {goToNextPage && (
        <button type="button" onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;

// src/components/payroll/PayrollPagination.jsx

import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const PayrollPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="payroll-pagination">

      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
      >
        <FaAngleLeft />
      </button>

      {getPages().map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination-btn ${
            currentPage === page ? "active-page" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        <FaAngleRight />
      </button>

    </div>
  );
};

export default PayrollPagination;
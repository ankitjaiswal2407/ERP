import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function EmployeePagination() {
  return (
    <div className="pagination">

      <button>
        <FiChevronLeft />
        Previous
      </button>

      <div className="page-numbers">

        <button className="active">1</button>
        <button>2</button>
        <button>3</button>

      </div>

      <button>
        Next
        <FiChevronRight />
      </button>

    </div>
  );
}

export default EmployeePagination;
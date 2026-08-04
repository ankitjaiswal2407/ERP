import { FiSearch } from "react-icons/fi";

function EmployeeSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="employee-search">

      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search by Name, Email or Employee ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
}

export default EmployeeSearch;
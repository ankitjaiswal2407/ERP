import { FiSearch } from "react-icons/fi";

function AttendanceSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="attendance-search">

      <FiSearch />

      <input
        type="text"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

    </div>
  );
}

export default AttendanceSearch;
// src/components/payroll/PayrollFilter.jsx

import { FaSearch, FaTimes } from "react-icons/fa";

const departments = [
  "HR",
  "IT",
  "Finance",
  "Sales",
  "Marketing",
  "Operations",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PayrollFilter = ({
  search,
  setSearch,
  department,
  setDepartment,
  month,
  setMonth,
  status,
  setStatus,
}) => {
  const clearFilters = () => {
    setSearch("");
    setDepartment("");
    setMonth("");
    setStatus("");
  };

  return (
    <div className="payroll-filter">

      <div className="payroll-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Employee ID, Name or Department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="">All Months</option>

        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>

      <button
        className="clear-filter-btn"
        onClick={clearFilters}
        type="button"
      >
        <FaTimes />
        Clear
      </button>

    </div>
  );
};

export default PayrollFilter;
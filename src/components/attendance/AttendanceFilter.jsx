function AttendanceFilter({
  value,
  onChange,
}) {
  return (
    <select
      className="attendance-filter"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      <option value="All">
        All Status
      </option>

      <option value="Present">
        Present
      </option>

      <option value="Absent">
        Absent
      </option>

      <option value="Leave">
        Leave
      </option>

    </select>
  );
}

export default AttendanceFilter;
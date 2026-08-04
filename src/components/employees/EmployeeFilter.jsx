function EmployeeFilter({
  title,
  options,
  value,
  onChange,
}) {
  return (
    <div className="employee-filter">

      <label>{title}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </div>
  );
}

export default EmployeeFilter;
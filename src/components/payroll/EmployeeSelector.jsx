const EmployeeSelector = ({
  value,
  employees = [],
  onChange,
}) => {
  return (
    <div className="form-group">
      <label>Select Employee</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Choose Employee</option>

        {employees.map((employee) => (
          <option
            key={employee.id}
            value={employee.employeeId}
          >
            {employee.employeeId} - {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeSelector;
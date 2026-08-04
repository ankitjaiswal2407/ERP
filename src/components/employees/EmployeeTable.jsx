import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function EmployeeTable({
  employees,
  onView,
  onEdit,
  onDelete,
}) {
  if (employees.length === 0) {
    return (
      <div className="employee-table-container">
        <div className="no-data">
          <h3>No Employees Found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="employee-table-container">

      <table className="employee-table">

        <thead>
          <tr>
            <th>Employee</th>
            <th>ID</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              {/* Employee */}

              <td>

                <div className="employee-info">

                  <div className="employee-avatar">
                    {employee.avatar}
                  </div>

                  <div>
                    <h4>
                      {employee.firstName} {employee.lastName}
                    </h4>

                    <p>{employee.phone}</p>
                  </div>

                </div>

              </td>

              {/* Employee ID */}

              <td>{employee.employeeId || employee.id}</td>

              {/* Email */}

              <td>{employee.email}</td>

              {/* Department */}

              <td>{employee.department}</td>

              {/* Designation */}

              <td>{employee.designation}</td>

              {/* Salary */}

              <td>
                ₹
                {Number(employee.salary || 0).toLocaleString("en-IN")}
              </td>

              {/* Status */}

              <td>

                <span
                  className={`status ${employee.status.toLowerCase()}`}
                >
                  {employee.status}
                </span>

              </td>

              {/* Actions */}

              <td>

                <div className="action-buttons">

                  {/* View */}

                  <button
                    className="view-btn"
                    title="View Employee"
                    onClick={() => onView(employee)}
                  >
                    <FiEye />
                  </button>

                  {/* Edit */}

                  <button
                    className="edit-btn"
                    title="Edit Employee"
                    onClick={() => onEdit(employee)}
                  >
                    <FiEdit2 />
                  </button>

                  {/* Delete */}

                  <button
                    className="delete-btn"
                    title="Delete Employee"
                    onClick={() => onDelete(employee)}
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;
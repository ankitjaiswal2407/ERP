import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function AttendanceTable({ attendance }) {

  if (attendance.length === 0) {
    return (
      <div className="attendance-table-container">
        <div className="no-data">
          <h3>No Attendance Found</h3>
          <p>No employee matches your search.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="attendance-table-container">

      <table className="attendance-table">

        <thead>

          <tr>

            <th>Employee</th>

            <th>Employee ID</th>

            <th>Department</th>

            <th>Check In</th>

            <th>Check Out</th>

            <th>Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {attendance.map((item) => (

            <tr key={item.id}>

              {/* Employee */}

              <td>

                <div className="employee-info">

                  <div className="employee-avatar">

                    {item.firstName.charAt(0)}

                  </div>

                  <div>

                    <h4>
                      {item.firstName} {item.lastName}
                    </h4>

                  </div>

                </div>

              </td>

              {/* Employee ID */}

              <td>{item.employeeId}</td>

              {/* Department */}

              <td>{item.department}</td>

              {/* Check In */}

              <td>{item.checkIn}</td>

              {/* Check Out */}

              <td>{item.checkOut}</td>

              {/* Date */}

              <td>{item.date}</td>

              {/* Status */}

              <td>

                <span
                  className={`status ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>

              </td>

              {/* Actions */}

              <td>

                <div className="action-buttons">

                  <button
                    className="view-btn"
                    title="View"
                  >
                    <FiEye />
                  </button>

                  <button
                    className="edit-btn"
                    title="Edit"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    className="delete-btn"
                    title="Delete"
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

export default AttendanceTable;
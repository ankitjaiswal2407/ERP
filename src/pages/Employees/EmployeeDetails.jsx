import {
  FiX,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiDollarSign,
  FiCalendar,
  FiMapPin,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function EmployeeDetails({
  employee,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}) {
  if (!isOpen || !employee) return null;

  return (
    <>
      <div
        className="details-overlay"
        onClick={onClose}
      />

      <aside className="employee-details">

        {/* Close */}

        <button
          className="details-close"
          onClick={onClose}
        >
          <FiX />
        </button>

        {/* Header */}

        <div className="details-header">

          <div className="details-avatar">
            {employee.avatar}
          </div>

          <h2>
            {employee.firstName} {employee.lastName}
          </h2>

          <p>{employee.designation}</p>

          <span
            className={`status ${employee.status.toLowerCase()}`}
          >
            {employee.status}
          </span>

        </div>

        {/* Information */}

        <div className="details-content">

          <div className="detail-item">
            <FiMail />
            <div>
              <small>Email</small>
              <h4>{employee.email}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FiPhone />
            <div>
              <small>Phone</small>
              <h4>{employee.phone}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FiBriefcase />
            <div>
              <small>Department</small>
              <h4>{employee.department}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FiBriefcase />
            <div>
              <small>Designation</small>
              <h4>{employee.designation}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FiDollarSign />
            <div>
              <small>Salary</small>
              <h4>
                ₹
                {Number(employee.salary).toLocaleString("en-IN")}
              </h4>
            </div>
          </div>

          <div className="detail-item">
            <FiCalendar />
            <div>
              <small>Joining Date</small>
              <h4>{employee.joiningDate}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FiMapPin />
            <div>
              <small>Address</small>
              <h4>{employee.address || "Not Available"}</h4>
            </div>
          </div>

        </div>

        {/* Footer */}

        <div className="details-footer">

          <button
            className="edit-btn"
            onClick={() => onEdit(employee)}
          >
            <FiEdit2 />
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(employee.id)}
          >
            <FiTrash2 />
            Delete
          </button>

        </div>

      </aside>
    </>
  );
}

export default EmployeeDetails;
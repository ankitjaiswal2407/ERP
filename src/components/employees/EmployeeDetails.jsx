import {
  FiMail,
  FiPhone,
  FiBriefcase,
  FiDollarSign,
  FiCalendar,
  FiMapPin,
  FiX,
  FiEdit,
  FiTrash2,
  FiHash,
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

      <div className="employee-details">

        <button
          className="close-details"
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

          <p>{employee.designation || "Employee"}</p>

          <span className="status-badge">
            {employee.status}
          </span>

        </div>

        {/* Body */}

        <div className="details-body">

          <div className="detail-item">
            <FiHash />
            <span>
              {employee.employeeId || employee.id}
            </span>
          </div>

          <div className="detail-item">
            <FiMail />
            <span>{employee.email}</span>
          </div>

          <div className="detail-item">
            <FiPhone />
            <span>{employee.phone}</span>
          </div>

          <div className="detail-item">
            <FiBriefcase />
            <span>{employee.department}</span>
          </div>

          <div className="detail-item">
            <FiDollarSign />
            <span>
              ₹
              {Number(employee.salary || 0).toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="detail-item">
            <FiCalendar />
            <span>
              {employee.joiningDate || "Not Available"}
            </span>
          </div>

          <div className="detail-item">
            <FiMapPin />
            <span>
              {employee.address || "No Address"}
            </span>
          </div>

        </div>

        {/* Footer */}

        <div className="details-actions">

          <button
            className="edit-btn"
            onClick={() => onEdit(employee)}
          >
            <FiEdit />
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(employee)}
          >
            <FiTrash2 />
            Delete
          </button>

        </div>

      </div>
    </>
  );
}

export default EmployeeDetails;
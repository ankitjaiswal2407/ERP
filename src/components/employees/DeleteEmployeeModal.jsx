import { FiTrash2, FiX } from "react-icons/fi";

function DeleteEmployeeModal({
  isOpen,
  employee,
  onCancel,
  onConfirm,
}) {
  if (!isOpen || !employee) return null;

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onCancel}
      />

      <div className="delete-modal">

        <div className="delete-icon">
          <FiTrash2 />
        </div>

        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete
          <strong>
            {" "}
            {employee.firstName} {employee.lastName}
          </strong>
          ?
        </p>

        <span>
          This action cannot be undone.
        </span>

        <div className="delete-actions">

          <button
            className="cancel-delete"
            onClick={onCancel}
          >
            <FiX />
            Cancel
          </button>

          <button
            className="confirm-delete"
            onClick={() => onConfirm(employee.id)}
          >
            <FiTrash2 />
            Delete
          </button>

        </div>

      </div>
    </>
  );
}

export default DeleteEmployeeModal;
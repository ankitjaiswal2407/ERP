import { FiX } from "react-icons/fi";

function EmployeeModal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="employee-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="employee-modal-header">

          <h2>{title}</h2>

          <button
            className="modal-close-btn"
            onClick={onClose}
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="employee-modal-body">
          {children}
        </div>

      </div>
    </div>
  );
}

export default EmployeeModal;
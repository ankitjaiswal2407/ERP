import { FiX } from "react-icons/fi";

function AttendanceModal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
      />

      <div className="attendance-modal">

        <div className="modal-header">

          <h2>{title}</h2>

          <button
            className="close-modal"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        <div className="modal-body">

          {children}

        </div>

      </div>
    </>
  );
}

export default AttendanceModal;
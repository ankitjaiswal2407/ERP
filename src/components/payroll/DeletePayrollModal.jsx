
import { FaTrash, FaTimes } from "react-icons/fa";

const DeletePayrollModal = ({
  isOpen,
  payroll,
  onClose,
  onConfirm,
}) => {
  if (!isOpen || !payroll) return null;

  return (
    <div className="modal-overlay">

      <div
        className="delete-payroll-modal"
        style={{
          maxWidth: "500px",
          width: "95%",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >

        <div className="modal-header">
          <h2>Delete Payroll</h2>

          <button
            className="close-btn"
            onClick={onClose}
            type="button"
          >
            <FaTimes />
          </button>
        </div>

        <div
          style={{
            padding: "25px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Are you sure you want to delete this payroll
            record?
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <tbody>

              <tr>
                <td><strong>Employee ID</strong></td>
                <td>{payroll.employeeId}</td>
              </tr>

              <tr>
                <td><strong>Name</strong></td>
                <td>{payroll.employeeName}</td>
              </tr>

              <tr>
                <td><strong>Department</strong></td>
                <td>{payroll.department}</td>
              </tr>

              <tr>
                <td><strong>Month</strong></td>
                <td>
                  {payroll.month} {payroll.year}
                </td>
              </tr>

              <tr>
                <td><strong>Net Salary</strong></td>
                <td>
                  ₹
                  {Number(
                    payroll.netSalary
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={() => {
                onConfirm(payroll.id);
                onClose();
              }}
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaTrash />
              Delete Payroll
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DeletePayrollModal;
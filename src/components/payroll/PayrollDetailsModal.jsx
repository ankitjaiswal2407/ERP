
import { FaTimes } from "react-icons/fa";

const PayrollDetailsModal = ({
  isOpen,
  payroll,
  onClose,
}) => {
  if (!isOpen || !payroll) return null;

  const rows = [
    ["Employee ID", payroll.employeeId],
    ["Employee Name", payroll.employeeName],
    ["Department", payroll.department],
    ["Month", `${payroll.month} ${payroll.year}`],
    ["Status", payroll.status],

    ["Basic Salary", `₹ ${Number(payroll.basicSalary).toLocaleString("en-IN")}`],
    ["HRA", `₹ ${Number(payroll.hra).toLocaleString("en-IN")}`],
    ["DA", `₹ ${Number(payroll.da).toLocaleString("en-IN")}`],
    ["Medical", `₹ ${Number(payroll.medical).toLocaleString("en-IN")}`],
    ["Bonus", `₹ ${Number(payroll.bonus).toLocaleString("en-IN")}`],
    [
      "Other Allowance",
      `₹ ${Number(payroll.otherAllowance).toLocaleString("en-IN")}`,
    ],

    [
      "Gross Salary",
      `₹ ${Number(payroll.grossSalary).toLocaleString("en-IN")}`,
    ],

    ["PF", `₹ ${Number(payroll.pf).toLocaleString("en-IN")}`],
    ["Tax", `₹ ${Number(payroll.tax).toLocaleString("en-IN")}`],
    ["Loan", `₹ ${Number(payroll.loan).toLocaleString("en-IN")}`],
    [
      "Other Deduction",
      `₹ ${Number(payroll.otherDeduction).toLocaleString("en-IN")}`,
    ],

    [
      "Total Deduction",
      `₹ ${Number(payroll.totalDeduction).toLocaleString("en-IN")}`,
    ],

    [
      "Net Salary",
      `₹ ${Number(payroll.netSalary).toLocaleString("en-IN")}`,
    ],
  ];

  return (
    <div className="modal-overlay">
      <div
        className="payroll-details-modal"
        style={{
          width: "95%",
          maxWidth: "800px",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div className="modal-header">
          <h2>Payroll Details</h2>

          <button
            className="close-btn"
            type="button"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        <div
          style={{
            padding: "25px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label}>
                  <td
                    style={{
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      fontWeight: 600,
                      width: "40%",
                      background: "#f9fafb",
                    }}
                  >
                    {label}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              className="cancel-btn"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDetailsModal;
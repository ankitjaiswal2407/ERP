// src/components/payroll/PayrollTable.jsx

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const PayrollTable = ({
  payrolls = [],
  onView,
  onEdit,
  onDelete,
  onPayslip,
}) => {
  return (
    <div className="payroll-table-container">
      <table className="payroll-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Month</th>
            <th>Basic Salary</th>
            <th>Gross Salary</th>
            <th>Deductions</th>
            <th>Net Salary</th>
            <th>Status</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {payrolls.length === 0 ? (
            <tr>
              <td
                colSpan="10"
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "#888",
                }}
              >
                No payroll records found.
              </td>
            </tr>
          ) : (
            payrolls.map((item) => (
              <tr key={item.id}>
                <td>{item.employeeId}</td>

                <td>{item.employeeName}</td>

                <td>{item.department}</td>

                <td>
                  {item.month} {item.year}
                </td>

                <td>
                  ₹{Number(item.basicSalary).toLocaleString("en-IN")}
                </td>

                <td>
                  ₹{Number(item.grossSalary).toLocaleString("en-IN")}
                </td>

                <td>
                  ₹{Number(item.totalDeduction).toLocaleString("en-IN")}
                </td>

                <td>
                  ₹{Number(item.netSalary).toLocaleString("en-IN")}
                </td>

                <td>
                  <span
                    className={
                      item.status === "Paid"
                        ? "status-paid"
                        : "status-pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="view-btn"
                      onClick={() => onView(item)}
                      title="View Payroll"
                      type="button"
                    >
                      <FaEye />
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(item)}
                      title="Edit Payroll"
                      type="button"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(item.id)}
                      title="Delete Payroll"
                      type="button"
                    >
                      <FaTrash />
                    </button>

                    <button
                      className="payslip-btn"
                      onClick={() => onPayslip(item)}
                      title="Generate Payslip"
                      type="button"
                    >
                      <FaFileInvoiceDollar />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollTable;
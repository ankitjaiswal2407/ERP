// src/components/payroll/PayrollHeader.jsx

import {
  FaPlus,
  FaFileExport,
  FaSyncAlt,
} from "react-icons/fa";

const PayrollHeader = ({
  onAdd,
  onExport,
  onRefresh,
}) => {
  return (
    <div className="payroll-header">

      <div className="payroll-title">
        <h2>Payroll Management</h2>
        <p>
          Manage employee payroll, salaries,
          deductions and payslips.
        </p>
      </div>

      <div className="payroll-header-actions">

        <button
          className="payroll-btn refresh-btn"
          onClick={onRefresh}
          type="button"
        >
          <FaSyncAlt />
          Refresh
        </button>

        <button
          className="payroll-btn export-btn"
          onClick={onExport}
          type="button"
        >
          <FaFileExport />
          Export CSV
        </button>

        <button
          className="payroll-btn add-btn"
          onClick={onAdd}
          type="button"
        >
          <FaPlus />
          Add Payroll
        </button>

      </div>
    </div>
  );
};

export default PayrollHeader;
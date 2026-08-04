import { FaFileCsv } from "react-icons/fa";

const ExportPayrollButton = ({ payrolls = [] }) => {
  const exportCSV = () => {
    if (!payrolls.length) {
      alert("No payroll records available.");
      return;
    }

    const headers = [
      "Employee ID",
      "Employee Name",
      "Department",
      "Month",
      "Year",
      "Basic Salary",
      "HRA",
      "DA",
      "Medical",
      "Bonus",
      "Other Allowance",
      "Gross Salary",
      "PF",
      "Tax",
      "Loan",
      "Other Deduction",
      "Total Deduction",
      "Net Salary",
      "Status",
    ];

    const rows = payrolls.map((item) => [
      item.employeeId,
      item.employeeName,
      item.department,
      item.month,
      item.year,
      item.basicSalary,
      item.hra,
      item.da,
      item.medical,
      item.bonus,
      item.otherAllowance,
      item.grossSalary,
      item.pf,
      item.tax,
      item.loan,
      item.otherDeduction,
      item.totalDeduction,
      item.netSalary,
      item.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `Payroll_${
      new Date().toISOString().split("T")[0]
    }.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      className="export-btn"
      onClick={exportCSV}
    >
      <FaFileCsv />
      Export CSV
    </button>
  );
};

export default ExportPayrollButton;
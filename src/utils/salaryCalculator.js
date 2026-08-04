// src/utils/salaryCalculator.js

/**
 * Format number as Indian Rupees
 */
export const formatCurrency = (amount) => {
  const value = Number(amount || 0);

  return value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

/**
 * Calculate payroll
 */
export const calculateSalary = ({
  basicSalary = 0,
  hra = 0,
  da = 0,
  medical = 0,
  bonus = 0,
  otherAllowance = 0,
  pf = 0,
  tax = 0,
  loan = 0,
  otherDeduction = 0,
}) => {
  basicSalary = Number(basicSalary);
  hra = Number(hra);
  da = Number(da);
  medical = Number(medical);
  bonus = Number(bonus);
  otherAllowance = Number(otherAllowance);

  pf = Number(pf);
  tax = Number(tax);
  loan = Number(loan);
  otherDeduction = Number(otherDeduction);

  const grossSalary =
    basicSalary +
    hra +
    da +
    medical +
    bonus +
    otherAllowance;

  const totalDeduction =
    pf +
    tax +
    loan +
    otherDeduction;

  const netSalary =
    grossSalary -
    totalDeduction;

  return {
    grossSalary,
    totalDeduction,
    netSalary,
  };
};

/**
 * Generate Payroll ID
 */
export const generatePayrollId = () => {
  const random = Math.floor(
    1000 + Math.random() * 9000
  );

  return `PAY-${random}`;
};

/**
 * Validate Payroll Data
 */
export const validatePayroll = (data) => {
  const errors = {};

  if (!data.employeeId?.trim())
    errors.employeeId = "Employee ID is required";

  if (!data.employeeName?.trim())
    errors.employeeName = "Employee Name is required";

  if (!data.department?.trim())
    errors.department = "Department is required";

  if (!data.month?.trim())
    errors.month = "Month is required";

  if (!data.year)
    errors.year = "Year is required";

  if (Number(data.basicSalary) <= 0)
    errors.basicSalary = "Basic Salary must be greater than 0";

  return errors;
};

/**
 * Save Payroll Records
 */
export const savePayrolls = (payrolls) => {
  localStorage.setItem(
    "payrolls",
    JSON.stringify(payrolls)
  );
};

/**
 * Load Payroll Records
 */
export const loadPayrolls = () => {
  const data = localStorage.getItem("payrolls");

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

/**
 * Search Payroll
 */
export const searchPayroll = (payrolls, keyword) => {
  if (!keyword) return payrolls;

  const value = keyword.toLowerCase();

  return payrolls.filter(
    (item) =>
      item.employeeName
        .toLowerCase()
        .includes(value) ||
      item.employeeId
        .toLowerCase()
        .includes(value) ||
      item.department
        .toLowerCase()
        .includes(value)
  );
};

/**
 * Filter Payroll
 */
export const filterPayroll = (
  payrolls,
  department,
  month,
  status
) => {
  return payrolls.filter((item) => {
    const departmentMatch =
      !department ||
      item.department === department;

    const monthMatch =
      !month ||
      item.month === month;

    const statusMatch =
      !status ||
      item.status === status;

    return (
      departmentMatch &&
      monthMatch &&
      statusMatch
    );
  });
};

/**
 * Pagination
 */
export const paginatePayroll = (
  payrolls,
  currentPage,
  rowsPerPage
) => {
  const start =
    (currentPage - 1) * rowsPerPage;

  const end =
    start + rowsPerPage;

  return payrolls.slice(start, end);
};

/**
 * CSV Export
 */
export const exportPayrollCSV = (payrolls) => {
  const headers = [
    "Employee ID",
    "Employee Name",
    "Department",
    "Month",
    "Year",
    "Basic Salary",
    "Gross Salary",
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
    item.grossSalary,
    item.totalDeduction,
    item.netSalary,
    item.status,
  ]);

  const csv = [
    headers,
    ...rows,
  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob(
    [csv],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = "Payroll.csv";

  link.click();

  window.URL.revokeObjectURL(url);
};
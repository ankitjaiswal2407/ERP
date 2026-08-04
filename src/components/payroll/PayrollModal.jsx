
import { useState } from "react";
import { FaTimes, FaSave } from "react-icons/fa";
import {
  calculateSalary,
  validatePayroll,
  generatePayrollId,
} from "../../utils/salaryCalculator";

const initialForm = {
  id: "",
  employeeId: "",
  employeeName: "",
  department: "",

  month: "",
  year: new Date().getFullYear(),

  basicSalary: "",
  hra: "",
  da: "",
  medical: "",
  bonus: "",
  otherAllowance: "",

  pf: "",
  tax: "",
  loan: "",
  otherDeduction: "",

  grossSalary: 0,
  totalDeduction: 0,
  netSalary: 0,

  status: "Pending",
};

const PayrollModal = ({
  isOpen,
  onClose,
  onSave,
  editPayroll,
}) => {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    id: generatePayrollId(),
  }));
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = {
        ...prev,
        [name]: value,
      };

      if (
        [
          "basicSalary",
          "hra",
          "da",
          "medical",
          "bonus",
          "otherAllowance",
          "pf",
          "tax",
          "loan",
          "otherDeduction",
        ].includes(name)
      ) {
        const salary = calculateSalary({
          basicSalary: next.basicSalary,
          hra: next.hra,
          da: next.da,
          medical: next.medical,
          bonus: next.bonus,
          otherAllowance: next.otherAllowance,
          pf: next.pf,
          tax: next.tax,
          loan: next.loan,
          otherDeduction: next.otherDeduction,
        });

        return {
          ...next,
          grossSalary: salary.grossSalary,
          totalDeduction: salary.totalDeduction,
          netSalary: salary.netSalary,
        };
      }

      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validatePayroll(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    onSave(form);

    setErrors({});
    setForm({
      ...initialForm,
      id: generatePayrollId(),
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="payroll-modal">

        <div className="modal-header">

          <h2>
            {editPayroll
              ? "Edit Payroll"
              : "Add Payroll"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
            type="button"
          >
            <FaTimes />
          </button>

        </div>

        <form
          className="payroll-form"
          onSubmit={handleSubmit}
        >

          <div className="form-grid">

            <div className="form-group">
              <label>Employee ID</label>

              <input
                type="text"
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
              />

              {errors.employeeId && (
                <small>{errors.employeeId}</small>
              )}
            </div>

            <div className="form-group">

              <label>Employee Name</label>

              <input
                type="text"
                name="employeeName"
                value={form.employeeName}
                onChange={handleChange}
              />

              {errors.employeeName && (
                <small>{errors.employeeName}</small>
              )}
            </div>

            <div className="form-group">

              <label>Department</label>

              <select
                name="department"
                value={form.department}
                onChange={handleChange}
              >
                <option value="">
                  Select Department
                </option>

                <option>HR</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Operations</option>

              </select>

              {errors.department && (
                <small>{errors.department}</small>
              )}

            </div>

            <div className="form-group">

              <label>Month</label>

              <select
                name="month"
                value={form.month}
                onChange={handleChange}
              >
                <option value="">
                  Select Month
                </option>

                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>

              </select>

              {errors.month && (
                <small>{errors.month}</small>
              )}

            </div>

            <div className="form-group">

              <label>Year</label>

              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">
              <label>Basic Salary</label>

              <input
                type="number"
                name="basicSalary"
                value={form.basicSalary}
                onChange={handleChange}
                min="0"
                placeholder="Enter Basic Salary"
              />

              {errors.basicSalary && (
                <small>{errors.basicSalary}</small>
              )}
            </div>

            <div className="form-group">
              <label>HRA</label>

              <input
                type="number"
                name="hra"
                value={form.hra}
                onChange={handleChange}
                min="0"
                placeholder="Enter HRA"
              />
            </div>

            <div className="form-group">
              <label>DA</label>

              <input
                type="number"
                name="da"
                value={form.da}
                onChange={handleChange}
                min="0"
                placeholder="Enter DA"
              />
            </div>

            <div className="form-group">
              <label>Medical Allowance</label>

              <input
                type="number"
                name="medical"
                value={form.medical}
                onChange={handleChange}
                min="0"
                placeholder="Enter Medical Allowance"
              />
            </div>

            <div className="form-group">
              <label>Bonus</label>

              <input
                type="number"
                name="bonus"
                value={form.bonus}
                onChange={handleChange}
                min="0"
                placeholder="Enter Bonus"
              />
            </div>

            <div className="form-group">
              <label>Other Allowance</label>

              <input
                type="number"
                name="otherAllowance"
                value={form.otherAllowance}
                onChange={handleChange}
                min="0"
                placeholder="Enter Other Allowance"
              />
            </div>

            <div className="form-group">
              <label>PF</label>

              <input
                type="number"
                name="pf"
                value={form.pf}
                onChange={handleChange}
                min="0"
                placeholder="Enter PF"
              />
            </div>

            <div className="form-group">
              <label>Tax</label>

              <input
                type="number"
                name="tax"
                value={form.tax}
                onChange={handleChange}
                min="0"
                placeholder="Enter Tax"
              />
            </div>

            <div className="form-group">
              <label>Loan</label>

              <input
                type="number"
                name="loan"
                value={form.loan}
                onChange={handleChange}
                min="0"
                placeholder="Enter Loan Deduction"
              />
            </div>

            <div className="form-group">
              <label>Other Deduction</label>

              <input
                type="number"
                name="otherDeduction"
                value={form.otherDeduction}
                onChange={handleChange}
                min="0"
                placeholder="Enter Other Deduction"
              />
            </div>

            <div className="form-group">
              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            <div className="form-group salary-box">
              <label>Gross Salary</label>

              <input
                type="text"
                readOnly
                value={`₹ ${Number(
                  form.grossSalary
                ).toLocaleString("en-IN")}`}
              />
            </div>

            <div className="form-group salary-box">
              <label>Total Deduction</label>

              <input
                type="text"
                readOnly
                value={`₹ ${Number(
                  form.totalDeduction
                ).toLocaleString("en-IN")}`}
              />
            </div>

            <div className="form-group salary-box">
              <label>Net Salary</label>

              <input
                type="text"
                readOnly
                value={`₹ ${Number(
                  form.netSalary
                ).toLocaleString("en-IN")}`}
              />
            </div>

          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setErrors({});
                setForm(initialForm);
                onClose();
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              <FaSave />
              {editPayroll ? " Update Payroll" : " Save Payroll"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default PayrollModal;
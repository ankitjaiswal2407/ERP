// src/components/payroll/PayslipModal.jsx

import {
  FaTimes,
  FaPrint,
  FaDownload,
} from "react-icons/fa";

const PayslipModal = ({
  isOpen,
  payroll,
  onClose,
}) => {
  if (!isOpen || !payroll) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = document.getElementById("payslip-content").innerHTML;

    const printWindow = window.open("", "", "width=900,height=700");

    printWindow.document.write(`
      <html>
        <head>
          <title>Payslip</title>

          <style>

            body{
              font-family:Arial;
              padding:30px;
              background:#f4f6f9;
            }

            .payslip{
              background:#fff;
              border-radius:10px;
              padding:30px;
              border:1px solid #ddd;
            }

            h1{
              text-align:center;
            }

            table{
              width:100%;
              border-collapse:collapse;
              margin-top:20px;
            }

            td{
              border:1px solid #ddd;
              padding:10px;
            }

          </style>

        </head>

        <body>

          <div class="payslip">
            ${content}
          </div>

        </body>

      </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();
  };

  return (
    <div className="modal-overlay">

      <div className="payslip-modal">

        <div className="modal-header">

          <h2>Payslip</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        <div
          id="payslip-content"
          className="payslip-content"
        >

          <h1>Salary Payslip</h1>

          <hr />

          <table>

            <tbody>

              <tr>
                <td>Employee ID</td>
                <td>{payroll.employeeId}</td>
              </tr>

              <tr>
                <td>Employee Name</td>
                <td>{payroll.employeeName}</td>
              </tr>

              <tr>
                <td>Department</td>
                <td>{payroll.department}</td>
              </tr>

              <tr>
                <td>Month</td>
                <td>
                  {payroll.month} {payroll.year}
                </td>
              </tr>

            </tbody>

          </table>

          <br />

          <table>

            <tbody>

              <tr>
                <td>Basic Salary</td>
                <td>
                  ₹
                  {Number(
                    payroll.basicSalary
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>HRA</td>
                <td>
                  ₹
                  {Number(
                    payroll.hra
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>DA</td>
                <td>
                  ₹
                  {Number(
                    payroll.da
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Medical</td>
                <td>
                  ₹
                  {Number(
                    payroll.medical
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Bonus</td>
                <td>
                  ₹
                  {Number(
                    payroll.bonus
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Other Allowance</td>
                <td>
                  ₹
                  {Number(
                    payroll.otherAllowance
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Gross Salary</td>
                <td>
                  ₹
                  {Number(
                    payroll.grossSalary
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>PF</td>
                <td>
                  ₹
                  {Number(
                    payroll.pf
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Tax</td>
                <td>
                  ₹
                  {Number(
                    payroll.tax
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Loan</td>
                <td>
                  ₹
                  {Number(
                    payroll.loan
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Other Deduction</td>
                <td>
                  ₹
                  {Number(
                    payroll.otherDeduction
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>Total Deduction</td>
                <td>
                  ₹
                  {Number(
                    payroll.totalDeduction
                  ).toLocaleString("en-IN")}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Net Salary</strong>
                </td>

                <td>
                  <strong>
                    ₹
                    {Number(
                      payroll.netSalary
                    ).toLocaleString("en-IN")}
                  </strong>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="modal-footer">

          <button
            className="print-btn"
            onClick={handlePrint}
          >
            <FaPrint />
            Print
          </button>

          <button
            className="download-btn"
            onClick={handleDownload}
          >
            <FaDownload />
            Download
          </button>

        </div>

      </div>

    </div>
  );
};

export default PayslipModal;
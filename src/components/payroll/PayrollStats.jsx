// src/components/payroll/PayrollStats.jsx

import  { useMemo } from "react";
import {
  FaUsers,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const PayrollStats = ({ payrolls = [] }) => {
  const stats = useMemo(() => {
    const totalEmployees = payrolls.length;

    const totalPayroll = payrolls.reduce(
      (sum, item) => sum + Number(item.netSalary || 0),
      0
    );

    const paid = payrolls.filter(
      (item) => item.status === "Paid"
    ).length;

    const pending = payrolls.filter(
      (item) => item.status === "Pending"
    ).length;

    return {
      totalEmployees,
      totalPayroll,
      paid,
      pending,
    };
  }, [payrolls]);

  const formatCurrency = (value) =>
    Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  const cards = [
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: <FaUsers />,
      className: "employees-card",
    },
    {
      title: "Monthly Payroll",
      value: formatCurrency(stats.totalPayroll),
      icon: <FaMoneyBillWave />,
      className: "payroll-card",
    },
    {
      title: "Paid Payroll",
      value: stats.paid,
      icon: <FaCheckCircle />,
      className: "paid-card",
    },
    {
      title: "Pending Payroll",
      value: stats.pending,
      icon: <FaClock />,
      className: "pending-card",
    },
  ];

  return (
    <div className="payroll-stats">
      {cards.map((card, index) => (
        <div
          className={`payroll-stat-card ${card.className}`}
          key={index}
        >
          <div className="payroll-stat-icon">
            {card.icon}
          </div>

          <div className="payroll-stat-content">
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PayrollStats;
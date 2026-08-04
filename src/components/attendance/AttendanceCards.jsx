import {
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiCoffee,
} from "react-icons/fi";

function AttendanceCards({ attendance }) {
  const total = attendance.length;

  const present = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const leave = attendance.filter(
    (item) => item.status === "Leave"
  ).length;

  const cards = [
    {
      title: "Total Employees",
      value: total,
      icon: <FiUsers />,
      className: "total-card",
    },
    {
      title: "Present",
      value: present,
      icon: <FiCheckCircle />,
      className: "present-card",
    },
    {
      title: "Absent",
      value: absent,
      icon: <FiXCircle />,
      className: "absent-card",
    },
    {
      title: "On Leave",
      value: leave,
      icon: <FiCoffee />,
      className: "leave-card",
    },
  ];

  return (
    <div className="attendance-cards">

      {cards.map((card, index) => (
        <div
          key={index}
          className={`attendance-card ${card.className}`}
        >
          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-info">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default AttendanceCards;
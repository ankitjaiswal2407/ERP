function Dashboard() {
  const stats = [
    { title: "Employees", value: "128", change: "+8%" },
    { title: "Attendance", value: "94%", change: "+2.1%" },
    { title: "Payroll", value: "$24.8k", change: "Due this week" },
    { title: "Pending Leave", value: "12", change: "4 urgent" },
  ];

  const activity = [
    { title: "New employee onboarded", time: "10 mins ago" },
    { title: "Payroll batch approved", time: "1 hr ago" },
    { title: "Leave request reviewed", time: "3 hrs ago" },
  ];

  const tasks = ["Approve payroll", "Review leave requests", "Update inventory stock"];

  return (
    <div className="dashboard-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Overview</p>
          <h1 style={{ margin: "4px 0 0", fontSize: "1.6rem" }}>Welcome Back 👋</h1>
        </div>
        <div style={{ padding: "10px 14px", borderRadius: "999px", background: "#fef3c7", color: "#92400e", fontWeight: 600 }}>
          SmartERP Dashboard
        </div>
      </div>

      <div className="dashboard-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <h3>{item.title}</h3>
            <div className="value">{item.value}</div>
            <div style={{ marginTop: "8px", color: "#16a34a", fontWeight: 600, fontSize: "0.9rem" }}>{item.change}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-panel-row">
        <div className="dashboard-panel">
          <h3>Recent Activity</h3>
          <ul>
            {activity.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
                <small>{item.time}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-panel">
          <h3>Quick Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
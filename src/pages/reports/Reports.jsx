import React from "react";

function Reports() {
  const metrics = [
    { name: "Revenue", value: "$182k", trend: "+12%" },
    { name: "Headcount", value: "128", trend: "+5" },
    { name: "Utilization", value: "87%", trend: "+4%" },
  ];

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">Review business KPIs and organizational trends.</p>
        </div>
        <span className="pill">Updated 2 mins ago</span>
      </div>

      <div className="page-grid">
        {metrics.map((metric) => (
          <div className="info-card" key={metric.name}>
            <h3>{metric.name}</h3>
            <div className="info-value">{metric.value}</div>
            <div className="info-meta">{metric.trend} vs last month</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;

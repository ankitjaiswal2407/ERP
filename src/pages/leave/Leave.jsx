import React from "react";

function Leave() {
  const requests = [
    { employee: "Sneha Gupta", type: "Casual", days: "3", status: "Approved" },
    { employee: "Arjun Yadav", type: "Sick", days: "2", status: "Pending" },
    { employee: "Neha Mishra", type: "Personal", days: "1", status: "Approved" },
  ];

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Leave Management</h1>
          <p className="page-subtitle">Review employee leave requests and balances.</p>
        </div>
        <span className="pill">Balance Left: 12 days</span>
      </div>

      <div className="page-grid">
        <div className="info-card">
          <h3>Pending Requests</h3>
          <div className="info-value">4</div>
          <div className="info-meta">2 urgent</div>
        </div>
        <div className="info-card">
          <h3>Approved This Month</h3>
          <div className="info-value">18</div>
          <div className="info-meta">+3% vs last month</div>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Type</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.employee}>
                <td>{request.employee}</td>
                <td>{request.type}</td>
                <td>{request.days}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leave;

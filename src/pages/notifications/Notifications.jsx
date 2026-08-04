import React from "react";

function Notifications() {
  const items = [
    { title: "Payroll approved", detail: "Monthly payroll batch is ready for dispatch." },
    { title: "Leave request", detail: "Two new leave requests need your review." },
    { title: "System update", detail: "Inventory module was synced successfully." },
  ];

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Notifications</h1>
          <p className="page-subtitle">Stay updated on important system events.</p>
        </div>
        <span className="pill">3 New Alerts</span>
      </div>

      <div className="list-stack">
        {items.map((item) => (
          <div className="list-item" key={item.title}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </div>
            <span className="pill">New</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;

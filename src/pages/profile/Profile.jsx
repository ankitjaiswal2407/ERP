import React from "react";

function Profile() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <p className="page-subtitle">Review your account and role details.</p>
        </div>
        <span className="pill">Administrator</span>
      </div>

      <div className="info-card">
        <h3>Account Summary</h3>
        <div className="info-value">Pallavi Sharma</div>
        <div className="info-meta">System Administrator • smart-erp@company.com</div>
      </div>
    </div>
  );
}

export default Profile;

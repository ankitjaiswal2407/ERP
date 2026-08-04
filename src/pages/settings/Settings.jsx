import React from "react";

function Settings() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Customize application preferences and integrations.</p>
        </div>
        <span className="pill">Admin controls</span>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Preference</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dark mode</td>
              <td>Enabled</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>Daily summary</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Payroll sync</td>
              <td>Auto</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Settings;

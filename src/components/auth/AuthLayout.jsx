import "./AuthLayout.css";
import NodeNetwork from "./NodeNetwork";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      {/* Left Panel */}
      <div className="auth-left">
        <div className="auth-content">
          <h1 className="brand">
            <span className="brand-badge">S</span>
            SmartERP
          </h1>

          <p className="subtitle">
            Enterprise Resource Planning System
            <br />
            Streamline your business with one unified platform.
          </p>

          <p className="status">
            SYSTEM STATUS : ONLINE
          </p>
        </div>

        {/* Animated Network */}
        <NodeNetwork />
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import "./auth-form.css";

function Register() {
  const [accountType, setAccountType] = useState("admin");

  return (
    <AuthLayout>
      <div className="auth-card register-card">

        <h2>Create your SmartERP Account</h2>

        <p className="auth-subtitle">
          Start managing your organization from one intelligent platform.
        </p>

        {/* Account Type */}

        <div className="account-section">

          <h4>Choose Account Type</h4>

          <div className="account-cards">

            {/* Admin */}

            <div
              className={`role-card ${
                accountType === "admin" ? "active" : ""
              }`}
              onClick={() => setAccountType("admin")}
            >
              <div className="role-icon">🏢</div>

              <h3>Organization Admin</h3>

              <p>
                Create a new organization and manage employees.
              </p>
            </div>

            {/* Employee */}

            <div
              className={`role-card ${
                accountType === "employee" ? "active" : ""
              }`}
              onClick={() => setAccountType("employee")}
            >
              <div className="role-icon">👤</div>

              <h3>Employee</h3>

              <p>
                Join an existing organization using your company code.
              </p>
            </div>

          </div>
        </div>

        {/* Dynamic Field */}

        {accountType === "admin" ? (
          <>
            <label className="form-label">
              Organization Name
            </label>

            <input
              className="input"
              type="text"
              placeholder="Enter organization name"
            />
          </>
        ) : (
          <>
            <label className="form-label">
              Organization Code
            </label>

            <input
              className="input"
              type="text"
              placeholder="Enter organization code"
            />
          </>
        )}

        <label className="form-label">
          Your Name
        </label>

        <input
          className="input"
          type="text"
          placeholder="Enter your full name"
        />

        <label className="form-label">
          Email Address
        </label>

        <input
          className="input"
          type="email"
          placeholder="name@company.com"
        />

        <label className="form-label">
          Mobile Number
        </label>

        <input
          className="input"
          type="tel"
          placeholder="+91 98765 43210"
        />

        <label className="form-label">
          Create Password
        </label>

        <input
          className="input"
          type="password"
          placeholder="Minimum 8 characters"
        />

        <label className="form-label">
          Confirm Password
        </label>

        <input
          className="input"
          type="password"
          placeholder="Re-enter your password"
        />

        <label className="remember-me terms">

          <input type="checkbox" />

          <span>
            I agree to the Terms of Service and Privacy Policy
          </span>

        </label>

        <button className="login-btn">
          Create Account
        </button>

        <div className="divider"></div>

        <p className="register-text">

          Already have an account?

          <Link to="/">
            Sign In
          </Link>

        </p>

      </div>
    </AuthLayout>
  );
}

export default Register;
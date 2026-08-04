import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import "./auth-form.css";

function ResetPassword() {

  const navigate = useNavigate();

  const handleReset = () => {
    // Later we'll connect this with backend
    alert("Password Reset Successfully!");
    navigate("/");
  };

  return (
    <AuthLayout>
      <div className="auth-card">

        <h2>Create New Password</h2>

        <p className="auth-subtitle">
          Your new password must be different from your previous password.
        </p>

        <label className="form-label">
          New Password
        </label>

        <input
          type="password"
          className="input"
          placeholder="Enter new password"
        />

        <label className="form-label">
          Confirm Password
        </label>

        <input
          type="password"
          className="input"
          placeholder="Confirm new password"
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Reset Password
        </button>

        <p className="register-text">
          <Link to="/">
            ← Back to Login
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}

export default ResetPassword;
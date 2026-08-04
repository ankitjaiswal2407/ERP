import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import "./auth-form.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Later we'll call the backend API here

    navigate("/verify-otp");
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <h2>Forgot Password?</h2>

        <p className="auth-subtitle">
          Don't worry! Enter your registered email address and we'll send you a
          verification code to reset your password.
        </p>

        <label className="form-label">
          Email Address
        </label>

        <input
          type="email"
          className="input"
          placeholder="name@company.com"
        />

        <button
          className="login-btn forgot-btn"
          onClick={handleSendOTP}
        >
          Send OTP
        </button>

        <p className="register-text">
          Remember your password?{" "}
          <Link to="/">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;
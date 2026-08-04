import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import "./auth-form.css";

function Login() {
  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-card-header">
          <span className="auth-pill">Secure sign in</span>
          <h2>Welcome Back 👋</h2>
          <p>Sign in to continue to SmartERP and manage your business smoothly.</p>
        </div>

        <div className="form-group">
          <label className="form-label">EMAIL ADDRESS</label>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label className="form-label">PASSWORD</label>
          <input
            className="input"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-footer">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>

          <Link to="/forgot-password" className="auth-link">
            Forgot Password?
          </Link>
        </div>

        <button className="login-btn">Login</button>

        <div className="divider">or</div>

        <p className="register-text">
          Don&apos;t have an account? {" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
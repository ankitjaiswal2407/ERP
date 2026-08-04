import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import "./auth-form.css";

function OTPVerification() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Handle typing
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle Paste
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const otpArray = pastedData.split("");
    const newOtp = [...otp];

    otpArray.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });

    setOtp(newOtp);

    const focusIndex = Math.min(otpArray.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  // Verify OTP
  const handleVerifyOTP = () => {
    if (otp.some((digit) => digit === "")) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    // Later connect backend here
    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <h2>Verify Your Email</h2>

        <p className="auth-subtitle">
          We've sent a 6-digit verification code to your registered email
          address.
        </p>

        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              className="otp-input"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        <button
          className="login-btn"
          onClick={handleVerifyOTP}
        >
          Verify OTP
        </button>

        <p className="resend-text">
          Didn't receive the code?
          <Link to="#"> Resend OTP</Link>
        </p>

        <p className="register-text">
          <Link to="/forgot-password">
            ← Back
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default OTPVerification;
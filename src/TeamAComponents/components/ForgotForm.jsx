/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./Footer";

function ForgotForm({ onForgotPassword }) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(''); // Add state for OTP

  const navigate = useNavigate();

  const handleForgot = (e) => {
    e.preventDefault();
    // Call the onForgotPassword prop with the email value
    onForgotPassword(email);
    console.log('Resetting password for email:', email);

    // Redirect to EmailVerification page after handling the forgot password logic
    navigate('/EmailForm');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-container">
        <form className="template-form" onSubmit={handleForgot}>
          <Link to="/login">
            <button className="wBackbutton">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </button>
          </Link>

          <h2 className="title">Forgot Password</h2>
          <p>Please enter your email address to reset your password.</p>
          <div className="email-input-field">
            {/* Use setEmail to update the email state */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email-input-field">
  <div className="otp-input-container">
    <input
      type="text"
      id="OTP"
      placeholder="OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
    />
    <button  className="otp-button">
      Send
    </button>
  </div>
</div>

          <Link to="/login">
            <div className="existing-account">
              Remember your password?
            </div>
          </Link>
          <Link to="/new">
            <button className="TeamA-button">Verify</button>
          </Link>
        </form>
      </div>
      <div className="forgot-container">
        <div className="forgot left-panel">
          <div className="forgot-content"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotForm;

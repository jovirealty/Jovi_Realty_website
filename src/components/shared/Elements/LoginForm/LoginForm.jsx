import React, { useState } from 'react';
import './LoginForm.css';
import logo from "../../../../assets/Images/jovi reality logo 1.svg";
import googleIcon from "../../../../assets/Images/googleIcon.svg";
import facebookIcon from "../../../../assets/Images/fbIcon.svg";
import linkedinIcon from "../../../../assets/Images/linkedinIcon.svg";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      setErrorMessage('Please fill out all required fields.');
      form.reportValidity();
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
    form.reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className='container d-flex justify-content-center'>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="jovi-form">
          <img src={logo} alt="Jovi Logo" className="jovi-logo" />

          <h2 className="jovi-heading">Welcome Back!</h2>
          <p className="jovi-subtext">
            Tell us a bit about yourself—this is how others will see you in the <a href="#">Jovi Realty</a> community.
          </p>

          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="eg: john_william_0125" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="************" required />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <div className="separator">
            <hr />
            <span>Or</span>
            <hr />
          </div>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={googleIcon} alt="Google" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          <div className="social-separator">
            <hr />
          </div>

          {/* Success/Error Messages */}
          {(isSubmitted || errorMessage) && (
            <div className="mt-4">
              {isSubmitted && (
                <div className="alert alert-success" role="alert">
                  Login Successful!
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          )}

          <button className="continue-btn btn btn-primary w-100 mt-3" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

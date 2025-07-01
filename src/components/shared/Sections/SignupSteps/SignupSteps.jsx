import React, { useState } from 'react';
import './SignupSteps.css';
import { Link } from 'react-router-dom';
import boldArrow from './../../../../assets/Images/bold-arrow.svg';
import semiboldArrow from './../../../../assets/Images/semi-bold-arrow.svg';
import lightArrow from './../../../../assets/Images/light-arrow.svg';
import addAddress from './../../../../assets/Images/Add-Address.svg';
import addSigners from './../../../../assets/Images/Add-Signers.svg';
import signContract from './../../../../assets/Images/Sign-Contract.svg';
import getListed from './../../../../assets/Images/Get-Listed.svg';

const SignupSteps = ({ title, showButton, buttonText, buttonLink, className = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;

    if (!form.checkValidity()) {
      // Handle empty required field
      setErrorMessage('Please enter a property address.');
      form.reportValidity();
      return;
    }

    // If form is valid, proceed with submission
    setErrorMessage(''); // Clear any existing error message
    setIsSubmitted(true); // Set state to show success message
    console.log('Form submitted:', { address }); // Replace with API call or other logic

    // Reset form after submission
    form.reset();
    setAddress('');

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Message disappears after 3 seconds
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <section className={`signup-steps-section ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="main-h2 text-center mb-5">{title}</h2>

            <div className="signup-steps-grid d-flex justify-content-between gap-40">
              <div className="signup-step-card">
                <img src={addAddress} alt="Submit Address" className="signup-step-icon" />
                <p className="mb-0">Submit Address</p>
              </div>

              <div className="signup-arrow">
                <img src={boldArrow} alt="Next step" />
              </div>

              <div className="signup-step-card">
                <img src={addSigners} alt="Add Signers" className="signup-step-icon" />
                <p className="mb-0">Add Signers</p>
              </div>

              <div className="signup-arrow">
                <img src={semiboldArrow} alt="Next step" />
              </div>

              <div className="signup-step-card">
                <img src={signContract} alt="Sign Contract" className="signup-step-icon" />
                <p className="mb-0">Sign Contract</p>
              </div>

              <div className="signup-arrow">
                <img src={lightArrow} alt="Next step" />
              </div>

              <div className="signup-step-card">
                <img src={getListed} alt="Get Listed" className="signup-step-icon" />
                <p className="mb-0">Get Listed</p>
              </div>
            </div>

            {showButton && (
              <div className="text-center mt-5">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="signup-steps-search">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter Your Property Address"
                      className="signup-steps-search-input"
                      value={address}
                      onChange={handleChange}
                      required
                    />
                    <button className="btn btn-primary signup-steps-search-button">
                      {buttonText} <i className="bi bi-arrow-right-short"></i>
                    </button>
                  </div>

                  {/* Messages Container - Only shown if there is a message */}
                  {(isSubmitted || errorMessage) && (
                    <div className="mt-4">
                      {/* Success Message */}
                      {isSubmitted && (
                        <div className="alert alert-success alert-minimal" role="alert">
                          Address submitted successfully!
                        </div>
                      )}

                      {/* Error Message */}
                      {errorMessage && (
                        <div className="alert alert-danger alert-minimal" role="alert">
                          {errorMessage}
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSteps;
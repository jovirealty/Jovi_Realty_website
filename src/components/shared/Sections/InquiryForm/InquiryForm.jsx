import React, { useState } from 'react';
import './InquiryForm.css';
import inquirySecImg from './../../../../assets/Images/inquiry-sec.png';

const InquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;

    if (!form.checkValidity()) {
      // Handle empty required fields
      setErrorMessage('Please fill out all required fields.');
      form.reportValidity();
      return;
    }

    // If form is valid, proceed with submission
    setErrorMessage(''); // Clear any existing error message
    setIsSubmitted(true); // Set state to show success message

    // Reset form after submission
    form.reset();

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <section className="inquiry-sec position-relative">
      <img src={inquirySecImg} className="position-absolute inquiry-sec-image d-md-block d-none" />
      <div className="inquiry-con container">
        <div className="row row-gap-50">
          {/* Left Side Image */}
          <div className="col-md-6">
            <img src={inquirySecImg} className="inquiry-sec-image-mob d-block d-md-none w-100" />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="inquiry-sec-form w-100">
              <h3 className="main-h3 mb-4">Real Estate Inquiry Form</h3>
              <p className="mb-lg-5 mb-4">Reach out today and let us help you find your perfect property.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="inquiry-form">
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="name">Full Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Enter Full Name" required />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="mobile-number">Mobile Number <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        required
                        name="mobile-number"
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="email">Email Address <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" placeholder="Enter Email Address" required />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="inquiry">Inquiry For <span className="text-danger">*</span></label>
                      <select className="form-control form-select" defaultValue="" required>
                        <option value="" disabled>Please Choose an Option</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-control" rows="4" placeholder="Enter a Brief Description"></textarea>
                  </div>

                  <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </div>
                </div>
              </form>

              {/* Messages Container - Only shown if there is a message */}
              {(isSubmitted || errorMessage) && (
                <div className="mt-4">
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="alert alert-success" role="alert">
                      Form submitted successfully!
                    </div>
                  )}

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
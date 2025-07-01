import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryFormTwo.css';
import inquirySec2Img from './../../../../assets/Images/inquiry-sec-2.png';

const InquiryFormTwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    inquiry: '',
    location: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
    console.log('Form submitted:', formData); // Replace with API call or other logic

    // Reset form after submission
    form.reset();
    setFormData({ name: '', mobile: '', email: '', inquiry: '', location: '' });

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
      // Optional: Navigate to a thank-you page
      navigate('/thank-you');
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <section className="inquiry-sec position-relative">
      <img src={inquirySec2Img} className="position-absolute inquiry-sec-image d-md-block d-none" alt="Inquiry background" />
      <div className="inquiry-con container">
        <div className="row row-gap-50">
          {/* Left Side Image */}
          <div className="col-md-6">
            <img src={inquirySec2Img} className="inquiry-sec-image-mob d-block d-md-none w-100" alt="Inquiry mobile" />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="inquiry-sec-form-2 w-100">
              <h3 className="main-h3 mb-4">Ready to Maximize Your Property's Potential?</h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className="inquiry-form">
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="name">Full Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="mobile">Mobile Number <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="email">Email Address <span className="text-danger">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="inquiry">Inquiry For <span className="text-danger">*</span></label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        className="form-control form-select"
                        value={formData.inquiry}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Please Choose an Option</option>
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-group">
                    <label className="form-label" htmlFor="location">Location <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control"
                      placeholder="Enter Location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100">
                      Request A Personal <i className="bi bi-arrow-right-short"></i>
                    </button>
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

export default InquiryFormTwo;
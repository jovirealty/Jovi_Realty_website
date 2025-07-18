import React, { useState } from 'react';
import './InquiryForm.css';
import inquirySecImg from './../../../../assets/Images/inquiry-sec.png';
import useFormApi from '../../../../hooks/useFormApi';

const INITIAL_STATE = {
  fullName: '',
  mobileNumber: '',
  emailAddress: '',
  iAm: '',
  message: '',
}

function validate(form) {
  // for the Full Name
  if (!form.fullName.trim() || !/^[A-Za-z]+(\s[A-Za-z]+)+$/.test(form.fullName.trim())) {
    return 'Please enter your complete name (first and last name, letters only).';
  }

  // Mobile: digits only, at least 7 numbers (update for your rules)
  if (!/^\d{10,12}$/.test(form.mobileNumber)) {
    return 'Please enter a valid mobile number (numbers only, at 10 digits).';
  }

  // Email: HTML5 handles type="email", but let's double-check
  if (!form.emailAddress.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.emailAddress)) {
    return 'Please enter a valid email address.';
  }

  if (!form.iAm) {
    return 'Please choose an option for Inquiry For.';
  }

  return null;
}

const InquiryForm = ({ inquiry="" }) => {
  const {title, subTitle} = inquiry;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_STATE);

  const { loading, error, response, submitForm } = useFormApi('homepage');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({...f, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage('');

    const formError = validate(formData);
    if(formError) {
      setErrorMessage(formError);
      return;
    }
    const HomePageFormObj = {
      ...formData,
      contactDetail: {
        countryCode: "+1",
        contactNumber: formData.mobileNumber
      },
    }
    await submitForm(HomePageFormObj);
    console.log(HomePageFormObj);
    setIsSubmitted(true);
    setFormData(INITIAL_STATE);
    setTimeout(() => setIsSubmitted(false), 3000);
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
              <h3 className="main-h3 mb-4">Have a Question or Ready to Chat?</h3>
              <p className="mb-lg-5 mb-4">Let us know how we can help—buying, selling, managing, or just exploring your options.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="inquiry-form">
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="name">Full Name <span className="text-danger">*</span></label>
                      <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="mobile-number">Mobile Number <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern='\d*'
                        maxLength={12}
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="email">Email Address <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter Email Address" 
                        required 
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        autoComplete='emailAddress'
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="inquiry">Inquiry For <span className="text-danger">*</span></label>
                      <select 
                        className="form-control form-select" 
                        defaultValue="" 
                        required
                        name='iAm'
                        value={formData.iAm}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Please Choose an Option</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                        <option value="rent">Join as an agent</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Enter a Brief Description"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      ></textarea>
                  </div>

                  <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
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
                  {(errorMessage || error) && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage || error}
                    </div>
                  )}
                  {/* Show backend response message */}
                  {response && !isSubmitted && (
                    <div className="alert alert-success" role="alert">
                      {typeof response === "string" ? response : "Submitted successfully!"}
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
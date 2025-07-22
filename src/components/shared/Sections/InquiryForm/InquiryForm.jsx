import React, { useState } from 'react';
import './InquiryForm.css';
import inquirySecImg from './../../../../assets/Images/inquiry-sec.png';
import useFormApi from '../../../../hooks/useFormApi';
import chunkArray from '../../../../utils/chunkArray';
import FormField from '../../../FormFields/FormField';

const INITIAL_STATE = {
  fullName: '',
  mobileNumber: '',
  emailAddress: '',
  iAm: '',
  message: '',
};

function validate(form, fields) {
  for (const field of fields) {
    if (field.required) {
      if (!form[field.name] || form[field.name].toString().trim() === "") {
        return `Please enter ${field.label || field.name}.`;
      }
    }
    // Custom rules for certain fields
    if (field.name === "fullName" && form.fullName && !/^[A-Za-z]+(\s[A-Za-z]+)+$/.test(form.fullName.trim())) {
      return "Please enter your complete name (first and last name, letters only).";
    }
    if (field.name === "mobileNumber" && form.mobileNumber && !/^\d{10,12}$/.test(form.mobileNumber)) {
      return "Please enter a valid mobile number (numbers only, at 10 digits).";
    }
    if (field.name === "emailAddress" && form.emailAddress && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.emailAddress)) {
      return "Please enter a valid email address.";
    }
  }
  return null;
}

const InquiryForm = ({ inquiryHeading="", APIRoute="", inquiryFields, transformFormData }) => {
  const {title, subTitle} = inquiryHeading;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(INITIAL_STATE);

  const { loading, error, response, submitForm } = useFormApi(APIRoute);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({...f, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage('');

    const formError = validate(formData, inquiryFields);
    if(formError) {
      setErrorMessage(formError);
      return;
    }
    const HomePageFormObj = transformFormData(formData);
    await submitForm(HomePageFormObj);
    setIsSubmitted(true);
    setFormData(INITIAL_STATE);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const fieldRows = chunkArray(
    inquiryFields.filter(f => f.name !== "message"), // message field goes in its own row
    2
  );

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
                  {fieldRows.map((rowFields, idx) => (
                    <div className="field-row" key={idx}>
                      {rowFields.map((field) => (
                        <FormField
                          key={field.name}
                          {...field}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  ))}

                   {/* Render the textarea/message in a full row */}
                    <div className="field-row">
                      <FormField
                        {...inquiryFields.find(f => f.name === "message")}
                        value={formData["message"]}
                        onChange={handleChange}
                      />
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
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import useFormApi from "../../../../hooks/useFormApi";

const INITIAL_STATE = {
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    message: '',
};

function validate(form) {
  // Name: require first and last, only letters
  if (!form.fullName.trim() || !/^[A-Za-z]+(\s[A-Za-z]+)+$/.test(form.fullName.trim())) {
    return "Please enter your complete name (first and last name, letters only).";
  }
  // Mobile: 10–12 digits only
  if (!/^\d{10,12}$/.test(form.mobileNumber)) {
    return "Please enter a valid mobile number (numbers only, 10–12 digits).";
  }
  // Email: basic pattern
  if (!form.emailAddress.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.emailAddress)) {
    return "Please enter a valid email address.";
  }
  return null;
}

const PropertyInquiryForm = ({ propertyInfo }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [propertyFormData, setPropertyFormData] = useState(INITIAL_STATE);
    const {loading, error, response, submitForm} = useFormApi("buy-rent-inquiry");
    
    const location = useLocation();
    const origin = window.location.origin;
    const fullPath = location.pathname + location.search + location.hash;
    const fullUrl = origin + fullPath;


    const handleChange = (e) => {
        const {name, value} = e.target;
        setPropertyFormData((f) => ({...f, [name]: value})); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const formError = validate(propertyFormData);
        if(formError) {
            setErrorMessage(formError);
            return;
        }
        const buyRentInquiry = {
            ...propertyFormData,
            contactDetail: {
                countryCode: "+1",
                contactNumber: propertyFormData.mobileNumber
            },
            propertyType: propertyInfo.PropertySubType,
            propertyDetail: {
                link: fullUrl,
                completeAddress: propertyInfo.UnparsedAddress
            },
        };
        console.log("check for data:", buyRentInquiry);
        await submitForm(buyRentInquiry);
        setIsSubmitted(true);
        setPropertyFormData(INITIAL_STATE);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="agent-form-box text-white">
            <h5 className="mb-3">Inquiry Form</h5>
            <p className="mb-3">
                Reach out today and let us help you find your perfect
                property.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="agent-inquiry-form d-flex flex-column">
                <div className="field-group">
                    <label className="form-label" htmlFor="name">
                    Full Name
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="fullName"
                    value={propertyFormData['fullName']}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="field-group">
                    <label className="form-label" htmlFor="email">
                    Mobile Number
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    name="mobileNumber"
                    value={propertyFormData['mobileNumber']}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="field-group">
                    <label className="form-label" htmlFor="email">
                    Email Address
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    name="emailAddress"
                    value={propertyFormData['emailAddress']}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="field-group">
                    <label className="form-label" htmlFor="description">
                    Description
                    </label>
                    <textarea
                    className="form-control"
                    name="message"
                    value={propertyFormData['message']}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter a Brief Description"
                    ></textarea>
                </div>

                <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100">
                        Send Inquiry
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
    );
};

export default PropertyInquiryForm;

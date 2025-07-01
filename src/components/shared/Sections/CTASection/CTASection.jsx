import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./CTASection.css";

const CTASection = ({ className = '' }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className={`cta-section text-center text-white ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column row-gap-20 align-items-center">
                            <h2 className="main-h2 mb-md-2 mb-0">Stay Ahead in Real Estate</h2>
                            <p className="mb-md-3 mb-0">
                                Get exclusive market insights, expert tips, and the latest property listings delivered to your inbox
                            </p>
                            <Link to="#" className="btn btn-tertiary" onClick={handleOpenPopup}>
                                Subscribe Now
                                <i className="bi bi-arrow-right-short"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="overlay">
                    <div className="popup">
                        <span className="close-btn" onClick={handleClosePopup}>
                            <RxCross2 className="w-75 fw-bold"/>
                        </span>
                        <h2 className="main-h4">Subscribe to Jovi-Reality!!</h2>
                        <input type="email" placeholder="Your Email" />
                        <button className="btn btn-primary w-100">Subscribe</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CTASection;


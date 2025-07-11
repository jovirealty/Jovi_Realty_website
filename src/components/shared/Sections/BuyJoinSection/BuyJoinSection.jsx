import React from 'react';
import { Link } from 'react-router-dom';
import './BuyJoinSection.css';

const BuyJoinSection = ({ className = '' }) => {
    return (
        <section className={`buy-join-sec text-white ${className}`}>
            <div className="container-fluid p-0">
                <div className="buy-join-row d-flex flex-md-row flex-column align-items-stretch flex-nowrap">
                    <div className="buy-col position-relative d-flex justify-content-center align-items-center">
                        <div className="buy-con position-relative d-flex justify-content-center align-items-center text-center flex-column row-gap-40">
                            <h2 className="main-h2 mb-0">Find Your Dream Home</h2>
                            <p className="mb-0">Looking to buy, sell, or manage a property in Greater Vancouver? Our expert realtors are ready to guide you with personalized service and deep market knowledge. Let us help you navigate your next real estate transaction with confidence.</p>
                            <Link to="/property-listing/buy">
                                <button className="btn btn-tertiary">
                                    Buy Property <i className="bi bi-arrow-right-short"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="join-col position-relative d-flex justify-content-center align-items-center">
                        <div className="join-con position-relative d-flex justify-content-center align-items-center text-center flex-column row-gap-40">
                            <h2 className="main-h2 mb-0">Join Our Brokerage</h2>
                            <p className="mb-0">Ready to take your real estate career to new heights? Join Jovi Realty and access unparalleled training, advanced technology, and a supportive team environment designed to fuel your success.</p>
                            <Link to="/join-jovi">
                                <button className="btn btn-tertiary">
                                    Join Jovi <i className="bi bi-arrow-right-short"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyJoinSection;
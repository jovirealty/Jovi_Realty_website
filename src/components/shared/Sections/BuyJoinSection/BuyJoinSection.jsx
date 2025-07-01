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
                            <h2 className="main-h2 mb-0">Find Your Dream Home - Start Today!</h2>
                            <p className="mb-0">Explore top listings, get expert guidance, and make your dream home a reality with us!</p>
                            <Link to="/property-listing/buy">
                                <button className="btn btn-tertiary">
                                    Buy Property <i className="bi bi-arrow-right-short"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="join-col position-relative d-flex justify-content-center align-items-center">
                        <div className="join-con position-relative d-flex justify-content-center align-items-center text-center flex-column row-gap-40">
                            <h2 className="main-h2 mb-0">Join Jovi Realty & Elevate Your Real Estate Career!</h2>
                            <p className="mb-0">Unlock top-tier support, high commissions, and cutting-edge tools—grow your real estate career today!</p>
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
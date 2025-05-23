import React from 'react';
import './AgentDetails.css';
import agentImage from './../../../../assets/Images/agent-img.png';
import instaImage from './../../../../assets/Images/insta-icon.svg';
import fbImage from './../../../../assets/Images/fb-icon.svg';
import linkdImage from './../../../../assets/Images/linkd-icon.svg';
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";

const AgentDetails = () => {
    return (
        <section className="agent-details-sec position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="agent-details-box position-relative">
                            <div className="row g-md-5 row-gap-40">
                                <div className="col-lg-4 col-md-5">
                                    <div className="agent-details-box-img">
                                        <img src={agentImage} alt="AJ Mohamed" />
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7">
                                    <div className="agent-details-box-content">
                                        <div className="d-flex align-items-lg-center justify-content-between flex-lg-row flex-column mb-4 gap-20">
                                            <h1 className="main-h1">AJ Mohamed</h1>
                                            <div className="social-icons d-flex column-gap-30">
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <img src={instaImage} />
                                                </a>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                <img src={fbImage} />
                                                </a>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                <img src={linkdImage} />
                                                </a>
                                            </div>
                                        </div>
                                        <p>Personal Real Estate Corporation</p>
                                        <p>Residential, Commercial</p>

                                        {/* Contact Details */}
                                        <div className="d-flex flex-wrap align-items-center mt-4 column-gap-30 row-gap-20">
                                            <div className="d-flex align-items-center gap-3">
                                                <TfiEmail size={24} color="#000" />
                                                <a href="mailto:aj@jovirealty.com" rel="noopener noreferrer" className='text-black text-decoration-none'>aj@jovirealty.com
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <FiPhone size={24} color="#000" />
                                                <a href="tel:6047824633" rel="noopener noreferrer" className='text-black text-decoration-none'>604-782-4633
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <SlGlobe size={24} color="#000" />
                                                <a href="tel:6047824633" rel="noopener noreferrer" className='text-black text-decoration-none'>604-782-4633
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentDetails;
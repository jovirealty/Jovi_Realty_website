import React from 'react';
import agentImage from './../../../../assets/Images/agent-img.png';
import instaImage from './../../../../assets/Images/insta-icon.svg';
import fbImage from './../../../../assets/Images/fb-icon.svg';
import linkdImage from './../../../../assets/Images/linkd-icon.svg';
import { TfiEmail } from "react-icons/tfi";
import { FiSmartphone } from "react-icons/fi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import getInitials from '../../../../utils/getInitials';

import './AgentDetails.css';

const AgentDetails = ({ agentData }) => {
    const { success, agent } = agentData;
    const agentName = agent.knownAs && agent.knownAs.trim() !== '' ? agent.knownAs : agent.fullName
    const initials = getInitials(agentName);

    return (
        <section className="agent-details-sec position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="agent-details-box position-relative">
                            <div className="row g-md-5 row-gap-40">
                                <div className="col-lg-4 col-md-5">
                                    <div className="agent-details-box-img" >
                                        {agent && agent?.photoUrl ? (
                                            <p>{initials}</p>
                                            // <img src={agent.photoUrl} alt={agent?.fullName || "Agent photo"} loading="lazy" decoding="async" />
                                            ) : (
                                            <p>{initials}</p>
                                            )}
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7">
                                    <div className="agent-details-box-content">
                                        <div className="d-flex align-items-lg-center justify-content-between flex-lg-row flex-column gap-20">
                                            <h1 className="main-h1">{agentName}</h1>
                                            <div className="d-flex column-gap-30">
                                                <span>License no. - #{agent?.licenseNumber}</span>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <span className='text-primary'>{agent.licensedAs === "Representative" ? `Sales ${agent.licensedAs}`: agent.licensedAs}</span>
                                            <div className='agent-card-section'>
                                                <p className='mt-2 mb-0'>{agent.personalRecCorpName && agent.personalRecCorpName.trim() !== '' ? agent.personalRecCorpName : 'Realtor®'}</p>
                                                <p className='m-0'>License: {agent.licensedFor}</p>
                                            </div>
                                        </div>

                                        {/* Contact Details */}
                                        <div className="d-flex flex-wrap align-items-center mt-4 column-gap-30 row-gap-20">
                                            <div className="d-flex align-items-center gap-3">
                                                <TfiEmail size={24} color="#000" />
                                                <a href={`mailto:${agent.email}`} rel="noopener noreferrer" className='text-black text-decoration-none'>
                                                    {agent.email}
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <FiSmartphone size={24} color="#000" />
                                                <a href={`tel:${agent.phoneNumber}`} rel="noopener noreferrer" className='text-black text-decoration-none'>
                                                    {agent.phoneNumber}
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <TbDeviceLandlinePhone size={24} color="#000" />
                                                <a rel="noopener noreferrer" className='text-black text-decoration-none'>
                                                    {agent.officePhone}
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <FiMapPin />
                                                <a rel="noopener noreferrer" className='text-black text-decoration-none'>
                                                    Greater Vancouver
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
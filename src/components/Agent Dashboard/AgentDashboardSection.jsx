import React from 'react'
import './AgentDashboardSection.css'

import bedroom from './../../assets/Images/bedroom.svg'
import bathroom from './../../assets/Images/bathrrom.svg'
import sqft from './../../assets/Images/sq.ft.svg'
import agent from './../../assets/Images/agent.png'
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const AgentDashboardSection = ({ enquiryData }) => {
    return (
        <div className="agent-dashboard-section">
            <div className="container">
                {/* Agent Info  */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center column-gap-20 inquiry-agent-box">
                        <img src={agent} alt="Agent" className="rounded-circle" width="77" />
                        <div>
                            <p className="mb-2">Mr. Jackson Mike</p>
                            <div className="d-flex flex-md-row flex-column column-gap-50 row-gap-10">
                                <p className="mb-0"><TfiEmail className="me-2" /> aj@jovirealty.com</p>
                                <p className="mb-0"><FiPhone className="me-2" /> 604-782-4633</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="divider-line" />

                {/* Enquiry List */}
                <h3 className="mb-4">Your Enquiry</h3>
                <div className="user-list d-flex flex-column">
                    {enquiryData.map((item, index) => (
                        <div key={index} className="user-block">
                            <div className="d-flex justify-content-between align-items-md-center flex-md-row flex-column gap-30">
                                <div>
                                    <p>Order ID: {item.orderId}</p>
                                    <p className="inquiry-post-date mb-0">Date: {item.date}</p>
                                </div>
                                <button className="btn btn-primary btn-sm">View Enquiry <i className="bi bi-arrow-right-short"></i></button>
                            </div>

                            <hr className="divider-line" />

                            {/* Property Image */}
                            <div className="row g-4 my-0 row-gap-40">
                                <div className="col-md-6 pe-md-3 mt-0 inquiry-img-col">
                                    <img src={item.mainImage} className="w-100 h-100" alt="Property" />
                                </div>

                                {/* Property Details */}
                                <div className="col-md-6 ps-md-3 mt-0 inquiry-col">
                                    <div className="d-flex justify-content-between align-items-center mb-3 title">
                                        <p className="mb-0">{item.title}</p>
                                        <p className="price mb-0">{item.price}</p>
                                    </div>
                                    <div className="d-flex align-items-center mt-1 gap-2 mb-4 location">
                                        <SlLocationPin />
                                        <span>{item.address}</span>
                                    </div>

                                    {/* Specs */}
                                    <div className="d-flex mt-3 justify-content-between specs">
                                        <span className="d-flex flex-column specs-item">
                                            <span className="d-flex align-items-center gap-2">
                                                {item.bedrooms} <img src={bedroom} width="30" alt="bed" />
                                            </span>
                                            <span>Bedrooms</span>
                                        </span>
                                        <div className="custom-seprator"></div>
                                        <span className="d-flex flex-column specs-item">
                                            <span className="d-flex align-items-center gap-2">
                                                {item.bathrooms} <img src={bathroom} width="30" alt="bath" />
                                            </span>
                                            <span >Bathrooms</span>
                                        </span>
                                        <div className="custom-seprator"></div>
                                        <span className="d-flex flex-column specs-item">
                                            <span className="d-flex align-items-center gap-2">
                                                {item.area} <img src={sqft} width="30" alt="sqft" />
                                            </span>
                                            <span>Square Ft</span>
                                        </span>
                                    </div>


                                    {/* Sub-images */}
                                    <div className="d-grid column-gap-30 mt-3 sub-images">
                                        {item.images.map((img, i) => (
                                            <img key={i} src={img} alt={`thumb-${i}`} className="rounded" />
                                        ))}
                                    </div>

                                </div>
                            </div>

                            <hr className="divider-line" />

                            {/* User Info */}
                            <div className="d-flex align-items-center column-gap-20 user-info">
                                <img src={item.user.avatar} alt="Agent" className="rounded-circle" width="77" />
                                <div>
                                    <p className="mb-2">{item.user.name}</p>
                                    <div className="d-flex flex-md-row flex-column column-gap-50 row-gap-10">
                                        <p className="mb-0"><TfiEmail className="me-2" />  {item.user.email}</p>
                                        <p className="mb-0"><FiPhone className="me-2" /> {item.user.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AgentDashboardSection;
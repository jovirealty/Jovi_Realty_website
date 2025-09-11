import React from "react";
import { Link } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import getInitials from "../../../../utils/getInitials";
import ajMohamedImage from "../../../../assets/Images/aj-mohamed.png"
import './AgentCard.css';

// CSS
import "./AgentCard.css";

const AgentCard = ({ agent }) => {
    const agentName = agent.knownAs && agent.knownAs.trim() !== '' ? agent.knownAs : agent.fullName
    const initials = getInitials(agentName);
    return (
        <div className="agent-card position-relative d-flex flex-column justify-content-end">
            {agent && agent?.photoUrl ? (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" >
                    <img 
                        src={agent.photoUrl}
                        className="agent-image position-absolute top-0 start-0 w-100 h-100" 
                    />
                </div>
            ) : (
                <div className="agent-image-initials d-flex align-items-center justify-content-center top-0 start-0 w-100 h-100">
                    <span className="agent-initials-text">{initials}</span>
                </div>
            )}
            <div className="agent-details bg-white position-relative">
                <div className="d-flex justify-content-between">
                    <div className="agent-firm d-flex gap-1 align-items-center">
                        <p className="text-primary text-decoration-none mb-0 font-bold">Jovi Realty Inc.</p>
                    </div>
                    <div className="agent-location d-flex gap-1 align-items-center">
                        <FiMapPin />
                        <p className="text-decoration-none mb-0">Greater Vancouver</p>
                    </div>
                </div>
                <h4 className="agent-name mt-3">{agentName}</h4>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="agent-designation mb-0">{agent.licensedAs === "Representative" ? `Sales ${agent.licensedAs}`: agent.licensedAs}</p>
                    <span className="agent-license-id">#{agent.licenseNumber}</span>  
                </div>
            </div>

            <Link
                to={`/find-an-agent/agent-profile/${agent.licenseNumber}`} 
                className="agent-view-profile-button btn-primary w-100 m-0 text-decoration-none text-center" 
            >
                View Profile
            </Link>
        </div>
    );
};

export default AgentCard;
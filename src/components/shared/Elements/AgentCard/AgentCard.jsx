import React from "react";
import "./AgentCard.css"

const AgentCard = ({ agent }) => {
    return (
        <a href="/find-an-agent/agent-profile" className="agent-card position-relative d-flex flex-column justify-content-end">
            <img 
                src={agent.image} 
                alt={`${agent.name} - ${agent.designation}`} 
                className="agent-image position-absolute top-0 start-0 w-100 h-100" 
            />
            <div className="agent-details bg-white position-relative">
                <h4 className="agent-name mb-1">{agent.name}</h4>
                <p className="agent-designation mb-0">{agent.designation}</p>
            </div>
        </a>
    );
};

export default AgentCard;
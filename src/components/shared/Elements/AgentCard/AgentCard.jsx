import React from "react";
import { Link } from 'react-router-dom';
import "./AgentCard.css"

const AgentCard = ({ agent }) => {
    
    let initials = "";
    if (agent.MemberFirstName && agent.MemberLastName) {
        initials = agent.MemberFirstName.charAt(0).toUpperCase() + agent.MemberLastName.charAt(0).toUpperCase();
    } else if (agent.MemberFullName) {
        const parts = agent.MemberFullName.trim().split(" ");
        initials = parts[0]?.charAt(0).toUpperCase() + (parts[1]?.charAt(0).toUpperCase() || "");
    }

    return (
        <Link to={`/find-an-agent/agent-profile/${agent.MemberKey}`} className="agent-card position-relative d-flex flex-column justify-content-end">
            <div
                className="agent-image-initials position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    borderRadius: "50%",
                }}
            >
                {initials}
            </div>
            <div className="agent-details bg-white position-relative">
                <h4 className="agent-name mb-1">{agent.MemberFullName}</h4>
                <p className="agent-designation mb-0">{agent.designation}</p>
            </div>
        </Link>
    );
};

export default AgentCard;
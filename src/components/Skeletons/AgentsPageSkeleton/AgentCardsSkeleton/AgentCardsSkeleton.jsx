import React from "react";
import "./AgentCardsSkeleton.css";


const AGENTS_PER_PAGE = 80; // Adjust to how many cards per page/row you want

const AgentCardsSkeleton = ({ count = AGENTS_PER_PAGE }) => (
  <div className="agents-grid">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="agent-card skeleton-agent-card">
        <div className="agent-img-skeleton skeleton-animated" />
        <div className="agent-card-body">
          <div className="skeleton-line skeleton-animated" style={{ width: "60%", height: 18, marginBottom: 8 }} />
          <div className="skeleton-line skeleton-animated" style={{ width: "40%", height: 14, marginBottom: 10 }} />
          <div className="skeleton-line skeleton-animated" style={{ width: "50%", height: 14, marginBottom: 12 }} />
          <div className="skeleton-line skeleton-animated" style={{ width: "80%", height: 20, marginBottom: 16 }} />
          <div className="skeleton-btn skeleton-animated" />
        </div>
      </div>
    ))}
  </div>
);

export default AgentCardsSkeleton;

import React from "react";
import "./AgentTabsSkeleton.css";

const AGENT_LISTINGS = 3;

const AgentTabsSkeleton = () => (
  <section>
    <div className="agent-tabs-section">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center gap-20">
            <div className="tab-skeleton agent-tabs-skeleton-animated" />
            <div className="tab-skeleton agent-tabs-skeleton-animated" />
          </div>
        </div>
      </div>
    </div>
    <div className="agent-tabs-content">
      <div className="container d-flex flex-column align-items-center justify-content-center position-relative">
        <div className="row w-100">
          <div className="col-12">
            {/* About Me Tab Skeleton */}
            <div className="main-h2 skeleton-line agent-tabs-skeleton-animated" style={{ width: "35%", height: 32, margin: "24px auto" }} />
            <div className="skeleton-line agent-tabs-skeleton-animated" style={{ width: "80%", height: 18, margin: "0 auto 16px" }} />
            <div className="skeleton-line agent-tabs-skeleton-animated" style={{ width: "90%", height: 18, margin: "0 auto 16px" }} />
            <div className="skeleton-line agent-tabs-skeleton-animated" style={{ width: "60%", height: 18, margin: "0 auto 28px" }} />
            {/* Active Listings Cards Skeleton */}
            <div className="row">
              {Array(AGENT_LISTINGS).fill(0).map((_,i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="listing-skeleton-card agent-tabs-skeleton-animated" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentTabsSkeleton;

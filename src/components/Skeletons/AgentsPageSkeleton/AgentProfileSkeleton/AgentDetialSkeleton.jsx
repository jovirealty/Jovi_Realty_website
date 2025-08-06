import React from "react";
import "./AgentDetialSkeleton.css";

const AgentDetailsSkeleton = () => (
  <section className="agent-details-sec position-relative">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="agent-details-box position-relative">
            <div className="row g-md-5 row-gap-40">
              <div className="col-lg-4 col-md-5">
                <div className="agent-details-box-img-sk agent-skeleton-animated" />
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="agent-details-box-content">
                  <div className="d-flex align-items-lg-center justify-content-between flex-lg-row flex-column mb-4 gap-20">
                    <div className="main-h1 skeleton-line agent-skeleton-animated" style={{ width: "50%", height: 36 }} />
                    <div className="social-icons d-flex column-gap-30">
                      {Array(3).fill(0).map((_,i) => (
                        <div key={i} className="skeleton-circle agent-skeleton-animated" />
                      ))}
                    </div>
                  </div>
                  <div className="skeleton-line agent-skeleton-animated" style={{ width: "60%", height: 20, marginBottom: 10 }} />
                  <div className="skeleton-line agent-skeleton-animated" style={{ width: "40%", height: 18, marginBottom: 16 }} />

                  {/* Contact Details */}
                  <div className="d-flex flex-wrap align-items-center mt-4 column-gap-30 row-gap-20">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className="skeleton-line agent-skeleton-animated" style={{ width: 190, height: 18, marginBottom: 10 }} />
                    ))}
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

export default AgentDetailsSkeleton;

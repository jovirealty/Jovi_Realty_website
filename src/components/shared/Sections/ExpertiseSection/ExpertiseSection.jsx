import React from "react";
import "./ExpertiseSection.css";

const ExpertiseSection = ({ title, items }) => {
  return (
    <section className="expertise-sec">
      <div className="container">
        <h2 className="main-h2 text-center mb-5">{title}</h2>
        <div className="row align-items-stretch">
          <div className="col-12 mt-4">
            <div className="expertise-grid position-relative">
              {items.map((item, index) => (
                <div key={item.id || index} className="expertise-item">
                  <div className="expertise">
                    <div className="text">
                      {/* Use div instead of p to avoid nesting issues */}
                      <div>{item.description}</div>
                    </div>
                    <div className="nums">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
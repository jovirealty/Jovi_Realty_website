import React from "react";
import { Link } from "react-router-dom";
import "./IconBoxSection.css";

const IconBoxSection = ({ title, items, showButton, buttonText, buttonLink, className = '' }) => {
  return (
    <section className={`icon-box-sec ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="main-h2 text-center mb-5">{title}</h2>
            <div className="icon-box-grid">
              {items.map((item, index) => (
                <div key={index} className="icon-box-card">
                  <div className="icon-box">
                    <div className="img">
                      <img src={item.icon} alt={item.title} />
                    </div>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            {showButton && (
              <div className="text-center mt-5">
                <Link to={buttonLink} className="btn btn-primary">
                  {buttonText} <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconBoxSection;
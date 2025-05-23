import React from "react";
import "./EmptySection.css";

const EmptySection = ({ children, className }) => {
  return (
    <section className={`empty-section ${className || ''}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default EmptySection;
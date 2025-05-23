import React, { useState } from "react";
import './FeaturedProperties.css';
import PropertyCard from "../../shared/Elements/PropertyCard/PropertyCard";
import PropertiesData from "../../Data/PropertiesData";

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("buy");

  // Filter properties by status and limit to 4
  const filteredProperties = PropertiesData
    .filter(property =>
      activeTab === "buy" ? property.status === "For Sale" : property.status === "For Rent"
    )
    .slice(0, 4);

  return (
    <section className="featured-properties text-center">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h2 className="main-h2 mb-3">Featured Properties</h2>
          <p className="section-subtitle">
            Explore Top Properties for Sale & Rent – Find Your Perfect Home
            Today with Jovi Realty.
          </p>
        </div>
        <div className="btn-con mb-5 mt-4">
          <button
            className={`btn ${activeTab === "buy" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </button>
          <button
            className={`btn ${activeTab === "rent" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="property-card-row d-grid">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <p>No properties available for this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
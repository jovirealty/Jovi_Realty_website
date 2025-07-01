import React, { useState, useEffect, useCallback } from "react";
import './FeaturedProperties.css';
import PropertyCard from "../../shared/Elements/PropertyCard/PropertyCard";
import useBridgeApi from "../../../hooks/useBridgeApi";
import PropertyCardSkeleton from "../../shared/Elements/PropertyCard/PropertyCardSkeleton";

const OFFICE_MLS_ID = "V005048";

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("buy");

  const getQueryParams = useCallback(() => {
    if(activeTab === "buy") {
      return {
        $filter: `StandardStatus eq 'Active' and PropertyType eq 'Residential' and ListOfficeMlsId eq '${OFFICE_MLS_ID}'`,
        $top: 8,
      };
    } else if(activeTab == "rent"){
      return {
        $filter: `StandardStatus eq 'Active' and PropertyType eq 'Residential Lease' and ListOfficeMlsId eq '${OFFICE_MLS_ID}'`,
        $top: 8,
      };
    }
  }, [activeTab]);

  // setup data lazy fetch
  const {data, error, loading, refetch, setQueryParams } = useBridgeApi(
    "/Property",
    getQueryParams(),
    false,
  );

  // Refetch properties when the tab changes
  useEffect(() => {
    setQueryParams(getQueryParams());
    refetch();
    // eslint-disable-next-line
  }, [activeTab]);

  // Get just the first 8 properties from API response
  const filteredProperties = (data && data.value) ? data.value.slice(0, 8) : [];
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
            {loading ? (
                <div className="property-grid-section">
                    <div className="container">
                        <div className="properties-grid">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <PropertyCardSkeleton key={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : error ? (
                <p>Error loading featured properties.</p>
            ) : (
                <div className="property-card-row d-grid">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <PropertyCard key={property.ListOfficeKey} property={property} />
                        ))
                    ) : (
                        <p>No properties available for this category.</p>
                    )}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
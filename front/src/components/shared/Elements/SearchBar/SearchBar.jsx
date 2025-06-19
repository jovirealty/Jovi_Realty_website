
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ onFilterChange = () => {}, isHomepage = false }) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("buy");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  
  const propertyTypeClause =
    activeTab === "buy"
      ? "PropertyType eq 'Residential'"
      : "PropertyType eq 'Residential Lease'";

  const handleSearch = () => {
    const clauses = [
      "StandardStatus eq 'Active'",
      propertyTypeClause,
    ];

    if (selectedLocation) {
      clauses.push(`City eq '${selectedLocation}'`);
    }
    if (selectedBedrooms) {
      clauses.push(`BedroomsTotal ge ${selectedBedrooms}`);
      clauses.push(`BedroomsTotal le ${selectedBedrooms}`);
    }
    if (selectedType) {
      clauses.push(`PropertySubType eq '${selectedType}'`);
    }
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-");
      clauses.push(`ListPrice ge ${min}`);
      clauses.push(`ListPrice le ${max}`);
    }
    const filterString = clauses.join(" and ");
    onFilterChange(filterString)
    // If we’re on the homepage, navigate → /property-listing/buy?…  or /rent?…
    if (isHomepage) {
      navigate(
        activeTab === "buy" ? "/property-listing/buy" : "/property-listing/rent"
      );
    }
  };

  const handleTabClick = (tab, path) => {
    setActiveTab(tab);
    setSelectedLocation("");
    setSelectedBedrooms("");
    setSelectedType("");
    setSelectedPriceRange("");
    if (!isHomepage) {
      navigate(path);
    }
  };
  const locations = ["Surrey", "Vancouver", "Burnaby", "Richmond", "Coquitlam"];
  const bedrooms = [1, 2, 3, 4, 5];
  const types = ["Condo", "Townhouse", "House", "Apartment"];
  const priceRanges = [
    { label: "$0 – $500,000", min: 0, max: 500000 },
    { label: "$500,000 – $1,000,000", min: 500000, max: 1000000 },
    { label: "$1,000,000 – $1,500,000", min: 1000000, max: 1500000 },
    { label: "$1,500,000 – $2,000,000", min: 1500000, max: 2000000 },
  ];

  const buyTabActive = activeTab === "buy";
  const rentTabActive = activeTab === "rent";

  return (
    <div className="search-bar-cont w-100">
      <div className="container">
        <div className="search-tabs-wrapper">
          <div className="nav nav-tabs search-tabs" role="tablist">
            <button
              type="button"
              className={`tab-btn ${buyTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("buy", "/property-listing/buy")}
              data-bs-toggle="tab"
              data-bs-target="#buy-tab"
              role="tab"
              aria-selected={buyTabActive}
            >
              Buy
            </button>
            <button
              type="button"
              className={`tab-btn ${rentTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("rent", "/property-listing/rent")}
              data-bs-toggle="tab"
              data-bs-target="#rent-tab"
              role="tab"
              aria-selected={rentTabActive}
            >
              Rent
            </button>
          </div>
        </div>

        <div className="tab-content">
          <div className={`tab-pane fade ${buyTabActive ? "show active" : ""}`} id="buy-tab" role="tabpanel">
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedLocation || "Select Location"}
                  </button>
                  <ul className="dropdown-menu">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <button className="dropdown-item" onClick={() => setSelectedLocation(loc)}>
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedBedrooms || "Select Bedrooms"}
                  </button>
                  <ul className="dropdown-menu">
                    {bedrooms.map((bed) => (
                      <li key={bed}>
                        <button className="dropdown-item" onClick={() => setSelectedBedrooms(bed)}>
                          {bed} Bedroom{bed > 1 ? "s" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedType || "Select Types"}
                  </button>
                  <ul className="dropdown-menu">
                    {types.map((type) => (
                      <li key={type}>
                        <button className="dropdown-item" onClick={() => setSelectedType(type)}>
                          {type}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedPriceRange || "Min. price – Max. price"}
                  </button>
                  <ul className="dropdown-menu">
                    {priceRanges.map((range) => (
                      <li key={range.label}>
                        <button
                          className="dropdown-item"
                          onClick={() => setSelectedPriceRange(`${range.min}-${range.max}`)}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className={`tab-pane fade ${rentTabActive ? "show active" : ""}`} id="rent-tab" role="tabpanel">
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedLocation || "Select Location"}
                  </button>
                  <ul className="dropdown-menu">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <button className="dropdown-item" onClick={() => setSelectedLocation(loc)}>
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedBedrooms || "Select Bedrooms"}
                  </button>
                  <ul className="dropdown-menu">
                    {bedrooms.map((bed) => (
                      <li key={bed}>
                        <button className="dropdown-item" onClick={() => setSelectedBedrooms(bed)}>
                          {bed} Bedroom{bed > 1 ? "s" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedType || "Select Types"}
                  </button>
                  <ul className="dropdown-menu">
                    {types.map((type) => (
                      <li key={type}>
                        <button className="dropdown-item" onClick={() => setSelectedType(type)}>
                          {type}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedPriceRange || "Min. price – Max. price"}
                  </button>
                  <ul className="dropdown-menu">
                    {priceRanges.map((range) => (
                      <li key={range.label}>
                        <button
                          className="dropdown-item"
                          onClick={() => setSelectedPriceRange(`${range.min}-${range.max}`)}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LocationCombobox from "../../../LocationCombobox/LocationCombobox";
import "./SearchBar.css";

const SearchBar = ({
  onFilterChange = () => {},
  isHomepage = false,
  defaultLocation = "",
  defaultBedrooms = "",
  defaultType = "",
  defaultPriceRange = "",
  activeTab: controlledTab,
  onTabChange,
}) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [selectedBedrooms, setSelectedBedrooms] = useState(defaultBedrooms);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [selectedPriceRange, setSelectedPriceRange] = useState(defaultPriceRange);

  const [internalTab, setInternalTab] = useState("buy");
  const activeTab = controlledTab !== undefined ? controlledTab : internalTab;

  useEffect(() => { setSelectedLocation(defaultLocation); }, [defaultLocation]);
  useEffect(() => { setSelectedBedrooms(defaultBedrooms); }, [defaultBedrooms]);
  useEffect(() => { setSelectedType(defaultType); }, [defaultType]);
  useEffect(() => { setSelectedPriceRange(defaultPriceRange); }, [defaultPriceRange]);

  const handleTabClick = (tab, path) => {
    if (controlledTab !== undefined && onTabChange) onTabChange(tab);
    else setInternalTab(tab);
    // optional: clear filters on tab switch
    setSelectedBedrooms(""); setSelectedType(""); setSelectedPriceRange("");
    if (!isHomepage) navigate(path);
  };

  const handleSearch = async () => {
    setLoading(true);
    const filterObj = {
      location: selectedLocation,
      bedrooms: selectedBedrooms,
      type: selectedType,
      priceRange: selectedPriceRange,
    };

    if (isHomepage) {
      const query = new URLSearchParams(
        Object.entries(filterObj).filter(([_, v]) => v)
      ).toString();
      const path = activeTab === "buy" ? "/property-listing/buy" : "/property-listing/rent";
      navigate(query ? `${path}?${query}` : path);
      setLoading(false);
    } else {
      await Promise.resolve(onFilterChange(filterObj));
      setLoading(false);
    }
  };

  // options (unchanged)
  const bedrooms = [1, 2, 3, 4, 5];
  const types = [
    "Single Family Residence",
    "Apartment/Condo",
    "Townhouse",
    "Duplex",
    "Half Duplex",
    "Manufactured Home",
    "Manufactured On Land",
    "Other",
    "Recreational",
    "Quadruplex",
  ];
  const priceRanges = [
    { label: "$0 – $500,000", min: 0, max: 500000 },
    { label: "$500,000 – $1,000,000", min: 500000, max: 1000000 },
    { label: "$1,000,000 – $1,500,000", min: 1000000, max: 1500000 },
    { label: "$1,500,000 – $2,000,000", min: 1500000, max: 2000000 },
  ];

  const buyTabActive = activeTab === "buy";
  const rentTabActive = activeTab === "rent";

  // shared filters row
  const FiltersRow = () => (
    <div className="search-row search-row--filters d-grid align-items-end">
      <div className="search-filter">
        <label className="form-label">Bedrooms</label>
        <div className="dropdown">
          <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
            {selectedBedrooms || "Select Bedrooms"}
          </button>
          <ul className="dropdown-menu">
            {bedrooms.map(bed => (
              <li key={bed}>
                <button className="dropdown-item" onClick={() => setSelectedBedrooms(bed)}>
                  {bed} Bedroom{bed > 1 ? "s" : ""}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="search-filter">
        <label className="form-label">Types</label>
        <div className="dropdown">
          <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
            {selectedType || "Select Types"}
          </button>
          <ul className="dropdown-menu">
            {types.map(type => (
              <li key={type}>
                <button className="dropdown-item" onClick={() => setSelectedType(type)}>
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="search-filter">
        <label className="form-label">Price Range</label>
        <div className="dropdown">
          <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
            {selectedPriceRange || "Min. price – Max. price"}
          </button>
          <ul className="dropdown-menu">
            {priceRanges.map(range => (
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
        <button className="btn btn-primary w-100 md-w-auto" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );

  const TabPane = ({ active }) => (
    <div className={`tab-pane fade ${active ? "show active" : ""}`} role="tabpanel">
      <div className="search-stack">
        {/* Top row: full-width location input */}
        <div className="search-row search-row--location">
          <div className="search-filter search-filter--full">
            <label className="form-label">Location</label>
            <LocationCombobox
              value={selectedLocation}
              onSelect={setSelectedLocation}
              activeTab={activeTab}
              placeholder="Enter a city, neighborhood, or area"
            />
          </div>
        </div>

        {/* Second row: filters + button */}
        <FiltersRow />
      </div>
    </div>
  );

  return (
    <div className="search-bar-cont w-100">
      <div className="container">
        <div className="search-tabs-wrapper">
          <div className="nav nav-tabs search-tabs" role="tablist">
            <button
              type="button"
              className={`tab-btn ${buyTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("buy", "/property-listing/buy")}
              role="tab"
              aria-selected={buyTabActive}
            >
              Buy
            </button>
            <button
              type="button"
              className={`tab-btn ${rentTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("rent", "/property-listing/rent")}
              role="tab"
              aria-selected={rentTabActive}
            >
              Rent
            </button>
          </div>
        </div>

        <div className="tab-content">
          <TabPane active={buyTabActive} />
          <TabPane active={rentTabActive} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css"

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBuyPage = location.pathname === "/property-listing/buy";
  const isRentPage = location.pathname === "/property-listing/rent";
  const isNavigationPage = isBuyPage || isRentPage;

  // Local state for tab management on non-Buy/Rent pages
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab, path) => {
    if (isNavigationPage) {
      // Navigate to the specified path for Buy/Rent pages
      navigate(path);
      // Manually trigger Bootstrap tab activation
      const tabElement = document.querySelector(`[data-bs-target="#${tab}-tab"]`);
      if (tabElement) {
        const bsTab = new window.bootstrap.Tab(tabElement);
        bsTab.show();
      }
    } else {
      // Update local state for non-Buy/Rent pages
      setActiveTab(tab);
    }
  };

  // Determine active tab class and content visibility
  const buyTabActive = isNavigationPage ? isBuyPage : activeTab === "buy";
  const rentTabActive = isNavigationPage ? isRentPage : activeTab === "rent";

  return (
    <div className="search-bar-cont w-100">
      {/* Tabs */}
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

        {/* Tab content */}
        <div className="tab-content">
          {/* Buy Tab */}
          <div
            className={`tab-pane fade ${buyTabActive ? "show active" : ""}`}
            id="buy-tab"
            role="tabpanel"
          >
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control-plaintext text-muted p-0"
                  placeholder="City, Community or Area"
                />
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Select Bedrooms
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        1 Bedroom
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        2 Bedrooms
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        3+ Bedrooms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Select Types
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        House
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Condo
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Townhome
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Min. price – Max. price
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        $0 – $500K
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $500K – $1M
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $1M+
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>

          {/* Rent Tab */}
          <div
            className={`tab-pane fade ${rentTabActive ? "show active" : ""}`}
            id="rent-tab"
            role="tabpanel"
          >
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control-plaintext text-muted p-0"
                  placeholder="City, Community or Area"
                />
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Select Bedrooms
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        1 Bedroom
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        2 Bedrooms
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        3+ Bedrooms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Select Types
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        House
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Condo
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Townhome
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-muted"
                    data-bs-toggle="dropdown"
                  >
                    Min. price – Max. price
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        $0 – $500K
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $500K – $1M
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $1M+
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
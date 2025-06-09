import React, { useState } from "react";
import "./PropertyGrid.css";
import PropertyCard from "../../Elements/PropertyCard/PropertyCard";

const PropertyGrid = ({ title, properties = [], status, itemsPerPage = 12, totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Use properties prop directly
  const displayProperties = totalItems
    ? properties.slice(0, totalItems)
    : properties;

  // Calculate total pages
  const totalPages = Math.ceil(displayProperties.length / itemsPerPage);

  // Get properties for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = displayProperties.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="property-grid-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="main-h2 mb-5 text-center">{title}</h2>
            {currentProperties.length > 0 ? (
              <div className="properties-grid">
                {currentProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <p className="text-center">No properties available for this category.</p>
            )}
          </div>
        </div>
        {totalPages > 1 && (
          <nav aria-label="Property pagination" className="mt-5">
            <ul className="pagination justify-content-center align-items-center">
              <li className={`page-item page-arr ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="bi bi-chevron-left" style={{ color: "#0D1835" }}></i>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <li
                  key={page}
                  className={`page-item ${currentPage === page ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li className={`page-item page-arr ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <i className="bi bi-chevron-right" style={{ color: "#0D1835" }}></i>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
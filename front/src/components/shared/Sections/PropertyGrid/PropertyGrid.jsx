import React, { useState } from "react";
import PropertyCard from "../../Elements/PropertyCard/PropertyCard";

import "./PropertyGrid.css";

const PropertyGrid = ({ title, properties = [], status, currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section className="property-grid-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="main-h2 mb-5 text-center">{title}</h2>
            {properties.length > 0 && (
              <div className="properties-grid">
                {properties.map((property) => (
                  <PropertyCard property={property} status={status} />
                ))}
              </div>
            )}
          </div>
        </div>
        {totalPages > 1 && (            
          <nav aria-label="Property pagination" className="mt-5">
            <div className="text-center mb-2 text-muted">
              Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
            </div>
            <ul className="pagination justify-content-center align-items-center flex-wrap">
              <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page, idx, arr) => {
                // Render only first, last, and a range around current, with "..."
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <li key={page} className={`page-item${currentPage === page ? " active" : ""}`}>
                      <button className="page-link" onClick={() => onPageChange(page)}>
                        {page}
                      </button>
                    </li>
                  );
                } else if (
                  (page === currentPage - 2 && page > 1) ||
                  (page === currentPage + 2 && page < totalPages)
                ) {
                  return (
                    <li key={page + "-dots"} className="page-item disabled">
                      <span className="page-link">…</span>
                    </li>
                  );
                }
                return null;
              })}
              <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &gt;
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
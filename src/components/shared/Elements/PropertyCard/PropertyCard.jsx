import React from "react";
import "./PropertyCard.css"
import { Link } from "react-router-dom";

import mapPin from "./../../../../assets/Images/map.png";
import bedroomIcon from "./../../../../assets/Images/bedroom-icon.png";
import bathroomIcon from "./../../../../assets/Images/bathroom-icon.png";
import squareFeetIcon from "./../../../../assets/Images/square-ft-icon.png";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card position-relative">
      <div className="property-card-img">
        <span className="badge">{property.status}</span>
        <img src={property.image} alt="Property Image" />
      </div>
      <div className="property-card-body">
        <h4 className="property-price">{property.price}</h4>
        <div className="property-name mb-2">
          <span>{property.location}</span>
          <span>{property.id}</span>
        </div>
        <div className="location mb-2">
          <img src={mapPin} alt="map-icon" />
          <p>{property.address}</p>
        </div>
        <div className="details">
          <div className="specs border-end">
            <div className="specific-specs">
              <span>{property.bedrooms}</span>
              <img src={bedroomIcon} alt="bedroom" />
            </div>
            <span>Bedrooms</span>
          </div>
          <div className="specs border-end">
            <div className="specific-specs">
              <span>{property.bathrooms}</span>
              <img src={bathroomIcon} alt="bathroom" />
            </div>
            <span>Bathrooms</span>
          </div>
          <div className="specs">
            <div className="specific-specs">
              <span>{property.squareFeet}</span>
              <img src={squareFeetIcon} alt="square feet" />
            </div>
            <span>Square Ft</span>
          </div>
        </div>
        <p className="offered">Offered By: {property.agent}</p>
        <Link to="/property-listing/property-inner" className="btn btn-primary position-absolute">
          View Details <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

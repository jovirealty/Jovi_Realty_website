import React from "react";
import "./PropertyCard.css";
import { Link } from "react-router-dom";
import useOfficeNameCached from "../../../../hooks/useOfficeNameCached";
import mapPin from "./../../../../assets/Images/map.png";
import bedroomIcon from "./../../../../assets/Images/bedroom-icon.png";
import bathroomIcon from "./../../../../assets/Images/bathroom-icon.png";
import squareFeetIcon from "./../../../../assets/Images/square-ft-icon.png";

const PropertyCard = ({ property, status }) => {
  const officeMlsId = property.ListOfficeMlsId;
  const officeName = useOfficeNameCached(officeMlsId);
  console.log("property card: ", property)

  const buildAddress = (property) => {
    const sanitize = (value) => {
      return typeof value === 'string' ? value.replace(/\s+/g, '') : value;
    };

    const parts = [
      sanitize(property.UnitNumber),
      property.StreetNumber,
      property.StreetName,
      property.StreetSuffix,
      property.City,
      property.Province,
      sanitize(property.PostalCode)
    ];

    const filteredParts = parts.filter(part => part != null && part !== '');

    return filteredParts.join('-');
  };

  const address = buildAddress(property);
  
  return (
    <div className="property-card position-relative">
      <div className="property-card-img">
        <span className="badge">{status}</span>
        {property?.Media && property.Media.length > 0 && property.Media[0]?.MediaURL ? (
          <img
            src={property.Media[0].MediaURL}
            alt="Property Image"
            style={{ width: "100%", height: "200px", objectFit: "cover", background: "#e6e7e9" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "#e6e7e9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888",
              fontWeight: "bold",
              fontSize: "1.1rem"
            }}
          >
            No Image Available
          </div>
        )}
      </div>
      <div className="property-card-body">
        <h4 className="property-price">${property.ListPrice?.toLocaleString()}</h4>
        <div className="property-name mb-2">
          <span>{property.City}</span>
          <span>MLS® ID#{property.ListingId}</span>
        </div>
        <div className="location mb-2">
          <img src={mapPin} alt="map-icon" />
          <p>{property.UnitNumber} {property.StreetNumber} {property.StreetName} {property.StreetSuffix}</p>
        </div>
        <div className="details">
          <div className="specs border-end">
            <div className="specific-specs">
              <span>{property.BedroomsTotal}</span>
              <img src={bedroomIcon} alt="bedroom" />
            </div>
            <span>Bedrooms</span>
          </div>
          <div className="specs border-end">
            <div className="specific-specs">
              <span>{property.BathroomsTotalInteger}</span>
              <img src={bathroomIcon} alt="bathroom" />
            </div>
            <span>Bathrooms</span>
          </div>
          <div className="specs">
            <div className="specific-specs">
              <span>{property.BuildingAreaTotal?.toLocaleString()}</span>
              <img src={squareFeetIcon} alt="square feet" />
            </div>
            <span>Square Ft</span>
          </div>
        </div>
        <p className="offered">Offered By: { officeName || "Brokerage Detail not provided" }</p>
        <Link to={`/propertydetails/${address}/${property.ListingKey}`} className="btn btn-primary position-absolute">
          View Details <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
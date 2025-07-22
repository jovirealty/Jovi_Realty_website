import React, { useEffect, useRef, useState } from "react";
import useBridgeApi from "../../../../hooks/useBridgeApi";
import "./PropertyDetails.css";
import PropertyInquiryForm from "../InquiryFormTwo/PropertyInquiryForm";
import EmptySection from "../EmptySection/EmptySection";

import bedIcon from "./../../../../assets/Images/bed-icon.svg";
import tubIcon from "./../../../../assets/Images/bathtub-icon.svg";
import frameIcon from "./../../../../assets/Images/frame-icon.svg";
import carIcon from "./../../../../assets/Images/car-icon.svg";
import agentImage from "./../../../../assets/Images/agent-image.png";
// import mailIcon from "./../../../../assets/Images/mail-icon-sl.svg";
// import callIcon from "./../../../../assets/Images/call-icon-sl.svg";
import { RxCross2 } from "react-icons/rx";

const PropertyDetails = ({ propertyInfo }) => {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const popupRef = useRef(null);
  const agentKey = propertyInfo?.ListAgentKey;
  const ListOfficeKey = propertyInfo?.ListOfficeKey;
  const listingDate = new Date(propertyInfo.ListingContractDate);
  const today = new Date();
  listingDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const timeDiff = today - listingDate;
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Fetch agent details using the OData entity key syntax
  const {
    data: agentData,
    loading: agentLoading,
    error: agentError,
  } = useBridgeApi(agentKey ? `/Member(${agentKey})` : null, {}, false);

  // console.log("agentData: ", agentData);
  
  // Office API: /Offices(<OfficeKey>)

  const {
    data: officeData,
    loading: officeLoading,
    error: officeError,
  } = useBridgeApi(
    ListOfficeKey ? `/Offices(${ListOfficeKey})` : null,
    {},
    false
  );
  // console.log("office data", officeData);

  const handleShareClick = (e) => {
    e.preventDefault();
    setShowSharePopup(true);
  };

  const handleClosePopup = () => {
    setShowSharePopup(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  // Escape key + click outside handler in useEffect
  useEffect(() => {
    const handleInteraction = (e) => {
      if (!showSharePopup) return;

      // Close on ESC key
      if (e.key === "Escape") {
        handleClosePopup();
      }

      // Close on outside click
      if (
        e.type === "mousedown" &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        handleClosePopup();
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("mousedown", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
    };
  }, [showSharePopup]);

  function getInitials(agent) {
    if (agent?.MemberFirstName && agent?.MemberLastName) {
      return (
        agent.MemberFirstName.charAt(0).toUpperCase() +
        agent.MemberLastName.charAt(0).toUpperCase()
      );
    }
    if (agent?.MemberFullName) {
      const parts = agent.MemberFullName.trim().split(" ");
      return (
        (parts[0]?.charAt(0).toUpperCase() || "") +
        (parts[1]?.charAt(0).toUpperCase() || "")
      );
    }
    return "";
  }

  return (
    <div className="property-details">
      <div className="container px-0">
        <div className="row m-0">
          <div className="col-12">
            <div className="details-box d-flex flex-column row-gap-40">
              <div className="detail-box-header d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-30">
                <div>
                  <p className="property_status">{propertyInfo.StandardStatus}</p>
                  <h2 className="property-address-line-1 secondary-h3 mb-1">
                    {propertyInfo.UnitNumber} {propertyInfo.StreetNumber}{" "}
                    {propertyInfo.StreetName} {propertyInfo.StreetSuffix}
                  </h2>
                  <p className="property-address-line-2 mb-0">
                    {propertyInfo.City === "No City Value"
                      ? ""
                      : `${propertyInfo.City}, `}
                    {propertyInfo.StateOrProvince}
                  </p>
                </div>
                <div>
                  <h2 className="property-price main-h2">
                    ${propertyInfo.ListPrice?.toLocaleString()}
                  </h2>
                </div>
              </div>
              <hr />
              <div className="property-info-strip d-flex justify-content-between align-items-sm-center align-items-start flex-md-row flex-column gap-50">
                <div className="property-type-row d-flex align-items-lg-center justify-content-between flex-lg-row flex-column gap-30 w-100">
                  <div>
                    <h5
                      className="mb-0"
                      style={{ fontSize: "22px", fontWeight: "400" }}
                    >
                      {propertyInfo.PropertySubType}
                    </h5>
                    <p className="mb-0" style={{ fontSize: "13px" }}>
                      Property Type
                    </p>
                  </div>
                  <div className="details-info d-sm-flex d-grid justify-content-between align-items-sm-center flex-wrap w-100 gap-30 flex-sm-row flex-column">
                    {propertyInfo.BedroomsTotal !== "" && (
                      <div className="">
                        <div className="detail-info d-flex align-items-center gap-10">
                          <p className="mb-0 detail-num">
                            {propertyInfo.BedroomsTotal}
                          </p>
                          <img src={bedIcon} alt={"bed Icon"} />
                        </div>
                        <p>Bedroom</p>
                      </div>
                    )}
                    {propertyInfo.BathroomsTotalInteger !== "" && (
                      <div className="">
                        <div className="detail-info d-flex align-items-center gap-10">
                          <p className="mb-0 detail-num">
                            {propertyInfo.BathroomsTotalInteger}
                          </p>
                          <img src={tubIcon} alt={"tub Icon"} />
                        </div>
                        <p>Bathroom</p>
                      </div>
                    )}
                    {propertyInfo.BuildingAreaTotal !== "" && (
                      <div className="">
                        <div className="detail-info d-flex align-items-center gap-10">
                          <p className="mb-0 detail-num">
                            {propertyInfo.BuildingAreaTotal?.toLocaleString()}
                          </p>
                          <img src={frameIcon} alt={"frame Icon"} />
                        </div>
                        <p>Square Area</p>
                      </div>
                    )}
                    {propertyInfo.ParkingTotal !== null && (
                      <div className="">
                        <div className="detail-info d-flex align-items-center gap-10">
                          <p className="mb-0 detail-num">
                            {propertyInfo.ParkingTotal}
                          </p>
                          <img src={carIcon} alt={"car Icon"} />
                        </div>
                        <p>Parking</p>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href="#"
                  className="share-btn column-gap-10 align-items-center d-flex"
                  onClick={handleShareClick}
                >
                  Share
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M20.5 4L3.5 9.5L10 12.5L17 7.5L12 14.5L15 21L20.5 4Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Share Popup */}
            {showSharePopup && (
              <div
                className="property-share-popup w-100 h-100 bg-black bg-opacity-75 position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
                style={{ zIndex: 999 }}
              >
                <div
                  className="popup-content bg-white p-4 rounded"
                  ref={popupRef}
                >
                  <span className="close-btn" onClick={handleClosePopup}>
                    <RxCross2 className="fs-4 fw-bold" />
                  </span>
                  <h4>Share this listing</h4>
                  <div className="share-options d-flex flex-column gap-2 mt-3">
                    <a
                      href={`https://wa.me/?text=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp"></i> WhatsApp
                    </a>
                    <a
                      href={`mailto:?subject=Check this property&body=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-envelope"></i> Email
                    </a>
                    {/* <a href={`sms:?body=Check out this property: ${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-chat-dots"></i> SMS
              </a> */}
                    <button onClick={handleCopyLink}>
                      <i className="bi bi-clipboard"></i> Copy Link
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row g-5 m-0 row-gap-50">
          <div className="col-lg-7 mt-0 d-flex flex-column row-gap-40">
            <h4 className="main-h4 mb-0">Property Description</h4>
            <p>{propertyInfo.PublicRemarks}</p>
            <h4 className="main-h4 mb-0">Property Information</h4>
            <table className="info-table table mb-2">
              <tbody>
                <tr>
                  <th scope="row">MLS® Number</th>
                  <td>{propertyInfo.ListAgentMlsId}</td>
                </tr>
                <tr>
                  <th scope="row">Listing Date</th>
                  <td>{propertyInfo.ListingContractDate}</td>
                </tr>

                <tr>
                  <th scope="row">Days on Market</th>
                  <td>{totalDays}</td>
                </tr>
                <tr>
                  <th scope="row">Property Type</th>
                  <td>{propertyInfo.PropertyType}</td>
                </tr>
                <tr>
                  <th scope="row">Property Sub Type</th>
                  <td>{propertyInfo.PropertySubType}</td>
                </tr>
                <tr>
                  <th scope="row">Year Built</th>
                  <td>{propertyInfo.YearBuilt}</td>
                </tr>
              </tbody>
            </table>
            <h4 className="main-h4 mb-0">Location Information</h4>
            <div className="row row-gap-40">
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Unit Number</th>
                      <td>{propertyInfo.UnitNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Street Number</th>
                      <td>{propertyInfo.StreetNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <td>{propertyInfo.City}</td>
                    </tr>
                    <tr>
                      <th scope="row">Postal Code</th>
                      <td>{propertyInfo.PostalCode}</td>
                    </tr>
                    <tr>
                      <th scope="row">Latitude</th>
                      <td>{propertyInfo.Latitude}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Street Name</th>
                      <td>{propertyInfo.StreetName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Street Suffix</th>
                      <td>{propertyInfo.StreetSuffix}</td>
                    </tr>
                    <tr>
                      <th scope="row">State/Province</th>
                      <td>{propertyInfo.StateOrProvince}</td>
                    </tr>
                    <tr>
                      <th scope="row">Sub Division</th>
                      <td>{propertyInfo.SubdivisionName ? propertyInfo.SubdivisionName : "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Longitude</th>
                      <td>{propertyInfo.Longitude}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h4 className="main-h4 mb-0">Interior Information</h4>
            <div className="row row-gap-40">
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Bedrooms</th>
                      <td>{propertyInfo.BedroomsTotal}</td>
                    </tr>
                    <tr>
                      <th scope="row">Half Bath</th>
                      <td>{propertyInfo.BathroomsHalf}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Bath</th>
                      <td>{propertyInfo.BathroomsTotalInteger}</td>
                    </tr>
                    <tr>
                      <th scope="row">Living Area</th>
                      <td>{propertyInfo.LivingArea?.toLocaleString()} sqrft</td>
                    </tr>
                    <tr>
                      <th scope="row">Floor Area</th>
                      <td>{propertyInfo.BCRES_MainFloorFinishedArea?.toLocaleString()} sqrft</td>
                    </tr>
                    <tr>
                      <th scope="row">Interior Features</th>
                      <td>{propertyInfo?.InteriorFeatures.length ? (
                        <>
                          {propertyInfo?.InteriorFeatures?.map((InteriorFeature) => (
                            <li style={{ listStyleType: "none" }}>{InteriorFeature}</li>
                          ))}
                        </>
                      ) : "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    {propertyInfo.HeatingYN && (
                      <tr>
                        <th scope="row">Heating System</th>
                        <td>
                          {propertyInfo?.Heating?.map((heatingValue) => (
                            <li style={{ listStyleType: "none" }}>{heatingValue}</li>
                          ))}
                        </td>
                      </tr>
                    )}
                    {propertyInfo.CoolingYN && (
                      <tr>
                        <th scope="row">Cooling System</th>
                        <td>
                          {propertyInfo?.Cooling?.map((coolingValue) => (
                            <li style={{ listStyleType: "none" }}>{coolingValue}</li>
                          ))}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <th scope="row">Total Fire place</th>
                      <td>{propertyInfo.FireplacesTotal > 0 ? propertyInfo.FireplacesTotal : "N/A"}</td>
                    </tr>
                    {propertyInfo.FireplaceYN && (
                      <tr>
                        <th scope="row">Fireplace Feature</th>
                        <td>
                          {propertyInfo?.FireplaceFeatures?.map((FireplaceFeaturesValue) => (
                            <li style={{ listStyleType: "none" }}>{FireplaceFeaturesValue}</li>
                          ))}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <th scope="row">Laundry Feature</th>
                      <td>{propertyInfo.LaundryFeatures.length ? (
                        <>
                          {propertyInfo?.LaundryFeatures?.map((laundry) => (
                            <li style={{ listStyleType: "none" }}>{laundry}</li>
                          ))}
                        </>
                      ) : "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Appliances</th>
                      <td>{propertyInfo?.Appliances.length ? (
                        <>
                          {propertyInfo?.Appliances?.map((appliance) => (
                            <li style={{ listStyleType: "none" }}>{appliance}</li>
                          ))}
                        </>
                      ) : "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h4 className="main-h4 mb-0">Exterior Information</h4>
            <div className="row row-gap-40">
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Lot Size In Acre</th>
                      <td>{propertyInfo.LotSizeAcres}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lot Size In sqrft</th>
                      <td>{propertyInfo.LotSizeSquareFeet}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lot Size Dimensions</th>
                      <td>{propertyInfo.LotSizeDimensions}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lot Features</th>
                      <td>{propertyInfo?.LotFeatures.length ? (
                        <>
                          {propertyInfo?.LotFeatures?.map((LotFeature) => (
                            <li style={{ listStyleType: "none" }}>{LotFeature}</li>
                          ))}
                        </>
                      ) : "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-12">
                <table className="info-table table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Open Parking</th>
                      <td>{propertyInfo?.OpenParkingYN || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Parking</th>
                      <td>{propertyInfo?.ParkingTotal || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Parking Features</th>
                      <td>{propertyInfo?.ParkingFeatures.length ? (
                        <>
                          {propertyInfo?.ParkingFeatures.map((ParkingFeature) => (
                            <li style={{ listStyleType: "none" }}>{ParkingFeature}</li>
                          ))}
                        </>
                      ) : "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Has View</th>
                      <td>{propertyInfo?.ViewYN ? propertyInfo.ViewYN : "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">View Description</th>
                      <td>{propertyInfo?.BCRES_ViewDescription ? propertyInfo?.BCRES_ViewDescription : "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Exterior Features</th>
                      <td>{propertyInfo?.ExteriorFeatures ? (propertyInfo?.ExteriorFeatures.map(() => (
                        <>
                          {propertyInfo?.ExteriorFeatures.map((ExteriorFeature) => (
                            <li style={{ listStyleType: "none" }}>{ExteriorFeature}</li>
                          ))}
                        </>
                      ))) : "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h4 className="main-h4 mb-0">Building & Community Information</h4>
            <table className="info-table table mb-2">
              <tbody>
                <tr>
                  <th scope="row">Strata</th>
                  <td>{propertyInfo.Ownership}</td>
                </tr>
                <tr>
                  <th scope="row">Amenities</th>
                  <td>{propertyInfo?.AssociationAmenities.length ? (
                    <>
                      {propertyInfo?.AssociationAmenities?.map((AssociationAmenitie) => (
                        <li style={{ listStyleType: "none" }}>{AssociationAmenitie}</li>
                      ))}
                    </>
                  ) : "N/A"}</td>
                </tr>
                <tr>
                  <th scope="row">Pet Policy</th>
                  <td>{propertyInfo?.PetsAllowed.length ? (
                    <>
                      {propertyInfo?.PetsAllowed?.map((Pet) => (
                        <li style={{ listStyleType: "none" }}>{Pet}</li>
                      ))}
                    </>
                  ) : "N/A"}</td>
                </tr>
              </tbody>
            </table>
            <h4 className="main-h4 mb-0">Financial Information</h4>
            <table className="info-table table mb-2">
              <tbody>
                <tr>
                  <th scope="row">Tax Year</th>
                  <td>{propertyInfo.TaxYear}</td>
                </tr>
                <tr>
                  <th scope="row">Annual Tax Amount</th>
                  <td>{propertyInfo?.TaxAnnualAmount}</td>
                </tr>
                <tr>
                  <th scope="row">Price per Square Foot</th>
                  <td>${(propertyInfo?.ListPrice / propertyInfo?.LotSizeArea).toFixed(3)}</td>
                </tr>
              </tbody>
            </table>
            <h4 className="main-h4 mb-0">Legal & Additional Information</h4>
            <table className="info-table table mb-2">
              <tbody>
                <tr>
                  <th scope="row">Tax Year</th>
                  <td>{propertyInfo.TaxYear}</td>
                </tr>
                <tr>
                  <th scope="row">Annual Tax Amount</th>
                  <td>{propertyInfo?.TaxAnnualAmount}</td>
                </tr>
                <tr>
                  <th scope="row">Price per Square Foot</th>
                  <td>${(propertyInfo?.ListPrice / propertyInfo?.LotSizeArea).toFixed(3)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-5 mt-0">
            <div className="sticky-top property-sticky-col d-flex flex-column row-gap-40">
              <div className="agent-box">
                <div className="agent-info d-flex align-items-center mb-3 gap-30">
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#0146a6",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: 22,
                      textTransform: "uppercase",
                    }}
                  >
                    {getInitials(agentData)}
                  </div>
                  <div>
                    <h4 className="agent-name mb-1">
                      {agentData?.MemberFullName}
                    </h4>
                    <p className="agent-designation mb-0">
                      {officeData?.OfficeName}
                    </p>
                  </div>
                </div>
              </div>
              <PropertyInquiryForm propertyInfo={propertyInfo} />
            </div>
          </div>
        </div>
      </div>
      <EmptySection />
    </div>
  );
};

export default PropertyDetails;

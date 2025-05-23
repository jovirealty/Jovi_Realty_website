import React, { useEffect, useRef, useState } from "react";
import "./PropertyDetails.css"

import bedIcon from "./../../../../assets/Images/bed-icon.svg";
import tubIcon from "./../../../../assets/Images/bathtub-icon.svg";
import frameIcon from "./../../../../assets/Images/frame-icon.svg";
import carIcon from "./../../../../assets/Images/car-icon.svg";
import agentImage from "./../../../../assets/Images/agent-image.png";
import mailIcon from "./../../../../assets/Images/mail-icon-sl.svg";
import callIcon from "./../../../../assets/Images/call-icon-sl.svg";
import { RxCross2 } from "react-icons/rx";

const PropertyDetails = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);
    const popupRef = useRef(null);
    // Define the dynamic details data
    const details = [
        { value: "3", icon: bedIcon, alt: "bed-icon" },
        { value: "2", icon: tubIcon, alt: "bathtub-icon" },
        { value: "1420m<sup>2</sup>", icon: frameIcon, alt: "frame-icon" },
        { value: "2", icon: carIcon, alt: "car-icon" },
    ];

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
      if (e.type === "mousedown" && popupRef.current && !popupRef.current.contains(e.target)) {
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

    return (
        <div className="property-details">
            <div className="container px-0">
                <div className="row m-0">
                    <div className="col-12">
      <div className="details-box d-flex flex-column row-gap-40">
        <div className="detail-box-header d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-30">
          <div>
            <h2 className="property-address-line-1 secondary-h2 mb-1">1503 Atlas Lane</h2>
            <p className="property-address-line-2 mb-0">Vancouver West, Granville</p>
          </div>
          <div>
            <h2 className="property-price main-h2">$1,928,888</h2>
          </div>
        </div>
        <hr />
        <div className="property-info-strip d-flex justify-content-between align-items-sm-center align-items-start flex-md-row flex-column gap-50">
          <div className="property-type-row d-flex align-items-lg-center justify-content-between flex-lg-row flex-column gap-30 w-100">
            <div>
              <h5 className="mb-0" style={{ fontSize: "22px", fontWeight: "400" }}>Apartment</h5>
              <p className="mb-0" style={{ fontSize: "13px" }}>Property Type</p>
            </div>
            <div className="details-info d-sm-flex d-grid justify-content-between align-items-sm-center flex-wrap w-100 gap-30 flex-sm-row flex-column">
              {details.map((detail, index) => (
                <div key={index} className="detail-info d-flex align-items-center gap-10">
                  <p className="mb-0 detail-num" dangerouslySetInnerHTML={{ __html: detail.value }} />
                  <img src={detail.icon} alt={detail.alt} />
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="share-btn column-gap-10 align-items-center d-flex" onClick={handleShareClick}>
            Share
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.5 4L3.5 9.5L10 12.5L17 7.5L12 14.5L15 21L20.5 4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Share Popup */}
     {showSharePopup && (
        <div className="property-share-popup w-100 h-100 bg-black bg-opacity-75 position-fixed top-0 start-0 d-flex justify-content-center align-items-center" style={{ zIndex: 999 }}>
          <div className="popup-content bg-white p-4 rounded" ref={popupRef}>
            <span className="close-btn" onClick={handleClosePopup}>
              <RxCross2 className="fs-4 fw-bold" />
            </span>
            <h4>Share this listing</h4>
            <div className="share-options d-flex flex-column gap-2 mt-3">
              <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a href={`mailto:?subject=Check this property&body=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope"></i> Email
              </a>
              <a href={`sms:?body=Check out this property: ${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-chat-dots"></i> SMS
              </a>
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
                        <h2 className="property-title secondary-h2 mb-0">2 BHK Apartment, Sea view</h2>
                        <h4 className="main-h4 mb-0">Property Description</h4>
                        <p>Situated in the prestigious Shannon Wall Centre Kerrisdale, this elegant 3-bedroom townhouse rests on a gated 10-acre heritage estate in South Granville. This stunning residence offers a unique blend of modern luxury and classic charm, making it an exceptional opportunity for homeowners seeking both comfort and exclusivity.
                            Upgraded with designer touches, the interior boasts a sophisticated ambiance. A breathtaking feature wall adds character and warmth, while tempered glass accents and wood strip panels elevate the aesthetic appeal. The home is adorned with Hunter Douglas Pirouette window shadings, allowing natural light to filter in beautifully. LED ceiling panels provide a contemporary touch, enhancing the overall atmosphere. Custom closets offer ample storage space, ensuring functionality meets style. Additional upgrades include a brand-new dryer and a fresh coat of paint, giving the home a pristine and inviting feel.</p>
                        <h4 className="main-h4 mb-0">Property Information</h4>
                        <table className="info-table table mb-2">
                            <tbody>
                                <tr>
                                    <th scope="row">Type</th>
                                    <td>Townhouse</td>
                                </tr>
                                <tr>
                                    <th scope="row">Purpose</th>
                                    <td>For Rent</td>
                                </tr>
                                <tr>
                                    <th scope="row">MLS® Number</th>
                                    <td>R2970307</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 className="main-h4 mb-0">Building Information</h4>
                        <div className="row row-gap-40">
                            <div className="col-md-6 col-12">
                                <table className="info-table table mb-0">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Building Name</th>
                                            <td>1503 Atlas Lane</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total Floors</th>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 col-12">
                                <table className="info-table table mb-0">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Total Building Area</th>
                                            <td>93,712 sqft</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Offices</th>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-0">
                        <div className="sticky-top property-sticky-col d-flex flex-column row-gap-40">
                            <div className="agent-box">
                                <div className="agent-info d-flex align-items-center mb-3 gap-30">
                                    <img src={agentImage} alt="" />
                                    <div>
                                        <h4 className="agent-name mb-1">Peony Au</h4>
                                        <p className="agent-designation mb-0">Personal Real Estate Corporation</p>
                                    </div>
                                </div>
                                <div className="agent-social d-grid gap-20">
                                    <a href="mailto:hello@jovirealty.com" className="d-flex align-items-center justify-content-center column-gap-10 text-white"><img src={mailIcon} alt="mail icon" />Email</a>
                                    <a href="tel:6042022929" className="d-flex align-items-center justify-content-center column-gap-10 text-white"><img src={callIcon} alt="call icon" />Call</a>
                                </div>
                            </div>
                            <div className="agent-form-box text-white">
                                <h5 className="mb-3">Inquiry Form</h5>
                                <p className="mb-3">Reach out today and let us help you find your perfect property.</p>
                                <form>
                                    <div className="agent-inquiry-form d-flex flex-column">
                                        <div className="field-group">
                                            <label className="form-label" htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Full Name" required />
                                        </div>
                                        <div className="field-group">
                                            <label className="form-label" htmlFor="email">Mobile Number</label>
                                            <input type="email" className="form-control" placeholder="Enter Mobile Number" required />
                                        </div>
                                        <div className="field-group">
                                            <label className="form-label" htmlFor="email">Email Address</label>
                                            <input type="email" className="form-control" placeholder="Enter Email Address" required />
                                        </div>
                                        <div className="field-group">
                                            <label className="form-label" htmlFor="description">Description</label>
                                            <textarea className="form-control" rows="4" placeholder="Enter a Brief Description"></textarea>
                                        </div>

                                        <div className="field-group">
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
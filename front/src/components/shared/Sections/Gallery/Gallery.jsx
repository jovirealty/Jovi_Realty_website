import React, { useState, useEffect, useRef } from "react";
import './Gallery.css';
import StatusBadge from "../../../../utils/StatusBadge ";

const GallerySection = ({ propertyMedia = [], PhotosCount, PropertyStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const lightboxRef = useRef(null);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevMedia = () =>
    setPhotoIndex((prev) => (prev - 1 + PhotosCount) % PhotosCount);

  const nextMedia = () =>
    setPhotoIndex((prev) => (prev + 1) % PhotosCount);

  // Close lightbox when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, PhotosCount]);

  // --- Usecase 2 handling ---
  if (!PhotosCount) {
    return (
      <div className="gallery-section d-flex align-items-center justify-content-center" style={{ minHeight: 200 }}>
        <p className="text-center m-0">No property image found</p>
      </div>
    );
  }

  if (PhotosCount === 1) {
    return (
      <div className="gallery-section single-image">
        <StatusBadge status={PropertyStatus} />
        <div className="row g-1 mx-0" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
          <div className="col-12">
            <div className="position-relative" onClick={() => openLightbox(0)}>
              <img 
                src={propertyMedia[0].MediaURL} 
                className="img-fluid w-100" 
                alt="propertyMedia-0"
                style={{ height: 400, width: "100%", objectFit: "contain", background: "white" }} 
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="lightbox position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
            onClick={handleBackdropClick}
            ref={lightboxRef}
            style={{ zIndex: 1050 }}
          >
            <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
              <button
                className="lightbox-icon position-absolute top-0 end-0 m-2"
                onClick={closeLightbox}
              >
                <i className="bi bi-x fs-5"></i>
              </button>
              <div className="propertyMedia-wrapper text-center">
                <img
                  src={propertyMedia[0].MediaURL}
                  alt={`propertyMedia-0`}
                  className="img-fluid"
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2, 3, or 4 images: fill all cells, no empty spaces
  if (PhotosCount < 5) {
    // 2 images: 2x1, 3 images: 3x1, 4 images: 2x2
    let layout;
    if (PhotosCount === 2) {
      layout = (
        <div className="row g-1 mx-0" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
          {propertyMedia.slice(0, 2).map((img, i) => (
            <div className="col-6" key={i}>
              <div className="position-relative" onClick={() => openLightbox(i)}>
                <img src={img.MediaURL} className="img-fluid w-100" alt={`propertyMedia-${i}`}
                style={{ height: 400, width: "100%", objectFit: "contain", background: "white" }} />
              </div>
            </div>
          ))}
        </div>
      );
    } else if (PhotosCount === 3) {
      layout = (
        <div className="row g-1 mx-0" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
          <div className="col-8">
            <div className="position-relative h-100" onClick={() => openLightbox(0)}>
              <img src={propertyMedia[0].MediaURL} className="img-fluid w-100 h-100 object-fit-cover" alt="propertyMedia-0" style={{ minHeight: 180 }} />
            </div>
          </div>
          <div className="col-4 d-flex flex-column gap-1">
            {propertyMedia.slice(1, 3).map((img, i) => (
              <div className="flex-fill position-relative" key={i + 1} onClick={() => openLightbox(i + 1)}>
                <img src={img.MediaURL} className="img-fluid w-100 object-fit-cover" alt={`propertyMedia-${i + 1}`} 
                style={{ minHeight: 88, height: 400, width: "100%", objectFit: "contain", background: "white" }} />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // 4 images: 2x2 grid
      layout = (
        <div className="row g-1 mx-0">
          {propertyMedia.slice(0, 4).map((img, i) => (
            <div className="col-6" key={i}>
              <div className="position-relative" onClick={() => openLightbox(i)}>
                <img 
                  src={img.MediaURL} 
                  className="img-fluid w-100" 
                  alt={`propertyMedia-${i}`}
                  style={{ height: 400, width: "100%", objectFit: "contain", background: "white" }} 
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="gallery-section">
        <StatusBadge status={PropertyStatus} />
        {layout}
        {isOpen && (
          <div
            style={{ zIndex: 1050, boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
            className="lightbox position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
            onClick={handleBackdropClick}
            ref={lightboxRef}
          >
            <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
              <button
                className="lightbox-icon position-absolute top-0 end-0 m-2"
                onClick={closeLightbox}
              >
                <i className="bi bi-x fs-5"></i>
              </button>
              {PhotosCount > 1 && (
                <button
                  className="lightbox-icon lightbox-arrow position-absolute top-50 start-0 translate-middle-y ms-2"
                  onClick={prevMedia}
                >
                  <i className="bi bi-chevron-left fs-5"></i>
                </button>
              )}
              <div className="propertyMedia-wrapper text-center">
                <img
                  src={propertyMedia[photoIndex].MediaURL}
                  alt={`propertyMedia-${photoIndex}`}
                  className="img-fluid"
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                />
              </div>
              {PhotosCount > 1 && (
                <button
                  className="lightbox-icon lightbox-arrow position-absolute top-50 end-0 translate-middle-y me-2"
                  onClick={nextMedia}
                >
                  <i className="bi bi-chevron-right fs-5"></i>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 5 or more images: use original layout with overlay for "See All"
  return (
    <div className="gallery-section">
      <StatusBadge status={PropertyStatus} />
      <div className="row g-1 mx-0" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
        <div className="col-md-6">
          {propertyMedia[0] && (
            <div className="position-relative" onClick={() => openLightbox(0)}>
              <img src={propertyMedia[0].MediaURL} className="img-fluid w-100" alt="propertyMedia-0" />
            </div>
          )}
        </div>
        <div className="col-md-6" style={{ background: "white" }}>
          <div className="row g-1">
            {propertyMedia.slice(1, 5).map((img, i) => (
              <div className="col-6" key={i + 1}>
                <div className="position-relative" onClick={() => openLightbox(i + 1)}>
                  <img src={img.MediaURL} className="img-fluid" alt={`propertyMedia-${i + 1}`} />
                  {i === 3 && PhotosCount > 5 && (
                    <div
                      className="see-all-photo-overlay position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center text-white"
                      onClick={() => openLightbox(0)}
                      style={{ cursor: "pointer" }}
                    >
                      <p>See All Photos</p>
                      <h4 className="more-photos-count mb-0 d-flex justify-content-center align-items-center">+{PhotosCount - 5}</h4>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          onClick={handleBackdropClick}
          ref={lightboxRef}
          style={{ zIndex: 1050 }}
        >
          <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <button
              className="lightbox-icon position-absolute top-0 end-0 m-2"
              onClick={closeLightbox}
            >
              <i className="bi bi-x fs-5"></i>
            </button>
            <button
              className="lightbox-icon lightbox-arrow position-absolute top-50 start-0 translate-middle-y ms-2"
              onClick={prevMedia}
            >
              <i className="bi bi-chevron-left fs-5"></i>
            </button>
            <div className="propertyMedia-wrapper text-center">
              <img
                src={propertyMedia[photoIndex].MediaURL}
                alt={`propertyMedia-${photoIndex}`}
                className="img-fluid"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto"
                }}
              />
            </div>
            <button
              className="lightbox-icon lightbox-arrow position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={nextMedia}
            >
              <i className="bi bi-chevron-right fs-5"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
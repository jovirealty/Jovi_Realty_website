import React, { useState, useEffect, useRef } from "react";
import './Gallery.css'

const GallerySection = ({ media }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const lightboxRef = useRef(null);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevMedia = () =>
    setPhotoIndex((prev) => (prev - 1 + media.length) % media.length);

  const nextMedia = () =>
    setPhotoIndex((prev) => (prev + 1) % media.length);

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
  }, [isOpen]);

  return (
    <div className="gallery-section">
      <div className="row g-1 mx-0">
        <div className="col-md-6">
          {media[0] && (
            <div className="position-relative" onClick={() => openLightbox(0)}>
              <img src={media[0]} className="img-fluid w-100" alt="media-0" />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="row g-1">
            {media.slice(1, 5).map((url, i) => (
              <div className="col-6" key={i + 1}>
                <div className="position-relative" onClick={() => openLightbox(i + 1)}>
                  <img src={url} className="img-fluid" alt={`media-${i + 1}`} />
                  {i === 3 && media.length > 5 && (
                    <div
                      className="see-all-photo-overlay position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center text-white"
                      onClick={() => openLightbox(0)}
                      style={{ cursor: "pointer" }}
                    >
                      <p>See All Photos</p>
                      <h4 className="more-photos-count mb-0 d-flex justify-content-center align-items-center">+{media.length - 5}</h4>
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
          className="lightbox position-fixed top-0 start Fullscreen mode activated for immersive experience.0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
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
            <div className="media-wrapper text-center">
              <img
                src={media[photoIndex]}
                alt={`media-${photoIndex}`}
                className="img-fluid"
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
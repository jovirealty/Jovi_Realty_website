import React from "react";

const GallerySkeleton = () => (
  <div
    className="gallery-section"
    style={{
      minHeight: 400,
      background: "#f6f7f8",
      position: "relative",
      borderRadius: 8,
      overflow: "hidden",
    }}
  >
    <div
      className="skeleton-shimmer"
      style={{
        width: "100%",
        height: 400,
        background: "linear-gradient(90deg,#f6f7f8 25%,#edeef1 37%,#f6f7f8 63%)",
        backgroundSize: "400% 100%",
        animation: "shimmer 1.2s linear infinite",
      }}
    />
    {/* Optionally, fake status badge: */}
    <div style={{
      position: "absolute",
      top: 16,
      left: 16,
      width: 120,
      height: 34,
      borderRadius: 8,
      background: "#eee",
    }} />
    <style>{`
      @keyframes shimmer {
        0% { background-position: -400px 0; }
        100% { background-position: 400px 0; }
      }
    `}</style>
  </div>
);

export default GallerySkeleton;
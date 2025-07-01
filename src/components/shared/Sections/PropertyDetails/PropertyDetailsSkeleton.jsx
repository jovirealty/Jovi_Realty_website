import React from "react";

const SkeletonLine = ({ width = "100%", height = 18, mb = 8 }) => (
  <div
    style={{
      width,
      height,
      marginBottom: mb,
      borderRadius: 4,
      background:
        "linear-gradient(90deg,#f6f7f8 25%,#edeef1 37%,#f6f7f8 63%)",
      backgroundSize: "400% 100%",
      animation: "shimmer 1.2s linear infinite",
    }}
  />
);

const PropertyDetailsSkeleton = () => (
  <div className="property-details py-4">
    <style>{`
      @keyframes shimmer {
        0% { background-position: -400px 0; }
        100% { background-position: 400px 0; }
      }
    `}</style>
    <div className="container px-0">
      <div className="row m-0">
        <div className="col-12">
          <div className="details-box">
            <SkeletonLine width="60%" height={28} />
            <SkeletonLine width="40%" height={22} />
            <SkeletonLine width="30%" height={18} mb={16} />
            <div className="d-flex gap-3">
              <SkeletonLine width={100} height={24} />
              <SkeletonLine width={60} height={24} />
              <SkeletonLine width={90} height={24} />
              <SkeletonLine width={70} height={24} />
            </div>
          </div>
        </div>
        <div className="row g-5 m-0 row-gap-50">
          <div className="col-lg-7 mt-4">
            <SkeletonLine width="90%" height={18} />
            <SkeletonLine width="100%" height={120} mb={24} />
            <SkeletonLine width="70%" height={18} />
            <SkeletonLine width="90%" height={40} />
            <SkeletonLine width="50%" height={18} mb={12} />
            <SkeletonLine width="100%" height={50} />
          </div>
          <div className="col-lg-5 mt-4">
            <div className="agent-box d-flex gap-3 align-items-center mb-3">
              <div style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#eee"
              }}/>
              <div>
                <SkeletonLine width={120} height={22} />
                <SkeletonLine width={80} height={16} />
              </div>
            </div>
            <div>
              <SkeletonLine width="100%" height={40} />
              <SkeletonLine width="100%" height={20} />
              <SkeletonLine width="100%" height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyDetailsSkeleton;

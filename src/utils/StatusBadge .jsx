import React from 'react';

const StatusBadge = ({ status }) => {
  return (
    <div style={{
        position: "absolute",
        top: 170,
        left: 16,
        zIndex: 10,
        background: "white",
        color: "#0146a6",
        fontWeight: 600,
        fontSize: 12,
        borderRadius: 5,
        padding: "6px 10px",
    }}>
        {status === "Residential" ? "For Sale" : "For Rent"}
    </div>
  );
};

export default StatusBadge;
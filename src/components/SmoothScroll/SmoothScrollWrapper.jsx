import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.05,
      alwaysShowTracks: false,
    });

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        overflow: "hidden", // Change overflow to hidden here
        position: "relative", // Make sure position is relative or fixed
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;







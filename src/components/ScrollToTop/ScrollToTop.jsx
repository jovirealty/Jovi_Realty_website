// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly or instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // or "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;


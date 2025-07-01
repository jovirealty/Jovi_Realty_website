import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // For new page navigation (pathname change), scroll to top instantly
    if (!hash) {
      // Ensure the scroll happens immediately
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Use instant to avoid animation
        });
      }, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Handle internal page linking (hash change)
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Scroll to the element smoothly for internal links
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If hash is removed, scroll to top instantly
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, 0);
    }
  }, [hash]);

  return null;
};

export default ScrollToTop;



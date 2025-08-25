import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | JOVI";
  }, []);

  // Swap this with one of your brand images if you prefer.
  const bg =
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2400&auto=format&fit=crop";

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">

      <main className="flex-grow-1">
        <section className="nf-hero">
          {/* Background image */}
          <img src={bg} alt="" decoding="async" className="nf-bg" />

          {/* Overlay for contrast */}
          <div className="nf-overlay" aria-hidden="true" />

          {/* Centered copy */}
          <div className="nf-copy text-center text-white">
            <p className="nf-eyebrow">404</p>
            <h1 className="nf-title">Page not found</h1>
            <p className="nf-subtitle">
              Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              <Link to="/" className="btn btn-light fw-medium">
                ← Back to home
              </Link>
              <Link to="/property-listing/buy" className="btn btn-dark">
                Browse properties
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

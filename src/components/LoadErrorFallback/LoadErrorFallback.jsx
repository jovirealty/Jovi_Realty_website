// at top of file
import { Link } from "react-router-dom";

// ...inside the file (above your component or at bottom)
function LoadErrorFallback({ message, onRetry, status }) {
  return (
    <section
      className="w-100 d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "60vh" }}
      aria-labelledby="property-error-title"
    >
      <div className="container px-3">
        <p className="text-uppercase fw-semibold text-muted small mb-2">{status}</p>
        <h1 id="property-error-title" className="fw-bold display-5 mb-2">
          We couldn’t load this property
        </h1>
        <p className="text-muted mb-4">
          Sorry, something went wrong while fetching the property details.
        </p>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onRetry || (() => window.location.reload())}
          >
            Try again
          </button>
          <Link to="/property-listing/buy" className="btn btn-outline-secondary">
            Back to listings
          </Link>
        </div>

        {/* Optional technical details (collapsed) */}
        {message ? (
          <details className="mt-3">
            <summary className="text-muted small">Technical details</summary>
            <pre className="small text-muted bg-light p-3 rounded mb-0">
              {String(message)}
            </pre>
          </details>
        ) : null}
      </div>
    </section>
  );
}

export default LoadErrorFallback;
// NewsInnerPage.jsx
import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import NewsSection from "../../components/shared/Sections/NewsSection/NewsSection";
import resourcesData from "../../components/Data/ResourcesData";
import "./NewsInnerPage.css";

const categoryColors = {
  news: { bg: "#E3F2FD", text: "#1976D2" },
  blog: { bg: "#E8F5E8", text: "#388E3C" },
  podcast: { bg: "#F3E5F5", text: "#7B1FA2" },
  "e-book": { bg: "#FFF3E0", text: "#F57C00" },
};
const tagColors = ["#E3F2FD", "#E8F5E8", "#F3E5F5", "#FFF3E0"];
const getTagColor = (i) => tagColors[i % tagColors.length];

const NewsInnerPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const resource = useMemo(() => resourcesData.find((r) => r.id === id), [id]);

  if (!resource) {
    return (
      <div className="container py-5">
        <button className="btn btn-link text-dark p-0" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left me-2" />
          Back
        </button>
        <h2 className="mt-3">Resource not found</h2>
        <p className="text-muted">The item you’re looking for doesn’t exist or was unpublished.</p>
      </div>
    );
  }

  const formattedDate = new Date(resource.createdAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const minRead = resource.category === "podcast" ? "15" : "5";
  const catStyle = categoryColors[resource.category] || { bg: "#F5F5F5", text: "#666" };

  // Related resources from the same category (exclude current)
  const related = resourcesData
    .filter((r) => r.publish && r.category === resource.category && r.id !== resource.id)
    .slice(0, 6);

  return (
    <div className="news-inner-page">
      <Header />

      {/* Hero */}
      <section className="container my-4">
        <div className="back-button mb-3">
          <button
            type="button"
            className="btn btn-link text-dark p-0 d-inline-flex align-items-center gap-2"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <i className="bi bi-arrow-left" />
            Back
          </button>
        </div>

        <div className="hero-card rounded-4 overflow-hidden shadow-sm">
          <div className="position-relative">
            <img
              src={resource.coverPhoto}
              alt={`${resource.title} – cover image`}
              className="w-100"
              style={{ objectFit: "cover", height: 420 }}
            />
            <span
              className="position-absolute"
              style={{
                left: 16,
                top: 16,
                padding: "8px 12px",
                borderRadius: 20,
                backgroundColor: catStyle.bg,
                color: catStyle.text,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
            </span>
          </div>

          {/* Title + Meta */}
          <div className="p-4 p-lg-5">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="news-date small">{formattedDate}</span>
              <span className="min-read small">{minRead} min read</span>
            </div>

            <h1 className="mb-2" style={{ fontWeight: 800, lineHeight: 1.2 }}>
              {resource.title}
            </h1>
            <p className="subtle fs-5 mb-3">{resource.subTitle}</p>

            <div className="d-flex align-items-center gap-3 text-muted">
              <span className="small">
                <i className="bi bi-eye me-1" />
                {resource.views.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <article
          className="news-content"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />

        {/* Properties panel */}
        <div className="props-wrap mt-4">
          {/* Tags (same style as card) */}
          {Array.isArray(resource.properties?.tags) && resource.properties.tags.length > 0 && (
            <>
              <div className="d-flex gap-2 flex-wrap">
                {resource.properties.tags.slice(0, 6).map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="tag-badge px-2 py-1 rounded-3 small fw-medium"
                    style={{ backgroundColor: getTagColor(i), color: "#333" }}
                  >
                    {tag}
                  </span>
                ))}
                {resource.properties.tags.length > 6 && (
                  <span className="text-muted small">
                    +{resource.properties.tags.length - 6}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section divider between Resource and Related */}
      <hr className="section-sep container my-5" />

      {/* Related */}
      <section className="container my-5">
        <NewsSection
          title="Related Resources"
          subTitle="More from this category you may find useful"
          totalPosts={6}
          className="pt-0"
          relatedResources={related}
        />
      </section>

      <Footer />
    </div>
  );
};

export default NewsInnerPage;

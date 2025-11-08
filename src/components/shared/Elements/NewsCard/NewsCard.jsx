import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";

const NewsCard = ({ resource }) => {
  const formattedDate = new Date(resource.createdAt).toLocaleDateString("en-CA", {
    year: "numeric", month: "short", day: "numeric",
  });

  const minRead = resource.category === "podcast" ? "15" : "5";

  const maxSubTitleLength = 120;
  const truncatedSubTitle =
    resource.subTitle.length > maxSubTitleLength
      ? `${resource.subTitle.substring(0, maxSubTitleLength)}...`
      : resource.subTitle;

  const maxExcerptLength = 150;
  const truncatedExcerpt =
    resource.excerpt.length > maxExcerptLength
      ? `${resource.excerpt.substring(0, maxExcerptLength)}...`
      : resource.excerpt;

  const categoryColors = {
    news: { bg: "#E3F2FD", text: "#1976D2" },
    blog: { bg: "#E8F5E8", text: "#388E3C" },
    podcast: { bg: "#F3E5F5", text: "#7B1FA2" },
    "e-book": { bg: "#FFF3E0", text: "#F57C00" },
  };
  const catStyle = categoryColors[resource.category] || { bg: "#F5F5F5", text: "#666" };
  const tagColors = ["#E3F2FD", "#E8F5E8", "#F3E5F5", "#FFF3E0"];
  const getTagColor = (i) => tagColors[i % tagColors.length];

  return (
    <div className="news-card">
      {/* Cover */}
      <div className="position-relative overflow-hidden">
        <img src={resource.coverPhoto} alt={resource.title} className="news-image w-100" />
        <span
          className="category-badge position-absolute"
          style={{ backgroundColor: catStyle.bg, color: catStyle.text, fontSize: "14px", padding: "8px 12px" }}
        >
          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
        </span>
      </div>

      {/* Content – grows to push footer to bottom */}
      <div className="p-4 card-content">
        {/* Meta: date | min read */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="news-date small">{formattedDate}</span>
          <span className="min-read small">{minRead} min read</span>
        </div>

        {/* Title, subtitle, excerpt */}
        <h3 className="news-title mb-1">{resource.title}</h3>
        <p className="news-sub-title subtle">{truncatedSubTitle}</p>
        <p className="news-description mb-0">{truncatedExcerpt}</p>

        {/* Body/Footer separator */}
        <hr className="card-sep my-3" />

        {/* Spacer makes tags+footer sit at the bottom uniformly */}
        <div className="grow-spacer" />

        {/* Tags */}
        <div className="tags d-flex gap-2 flex-wrap">
          {resource.properties.tags.slice(0, 3).map((tag, i) => (
            <span
              key={tag}
              className="tag-badge px-2 py-1 rounded-3 small fw-medium"
              style={{ backgroundColor: getTagColor(i), color: "#333" }}
            >
              {tag}
            </span>
          ))}
          {resource.properties.tags.length > 3 && (
            <span className="text-muted small">+{resource.properties.tags.length - 3}</span>
          )}
        </div>

        {/* New divider between tags and footer */}
        <hr className="tags-sep" />

        {/* Footer: views | arrow (now same vertical position for all cards) */}
        <div className="card-footer">
          <span className="views text-muted small">
            <i className="bi bi-eye me-1" />
            {resource.views.toLocaleString()}
          </span>
          <Link
            to={`/news-and-resources/${resource.id}/${resource.slug}`}
            className="arrow-btn d-flex align-items-center justify-content-center rounded-circle bg-primary text-white shadow-sm"
            style={{ width: 40, height: 40 }}
            aria-label="Read more"
          >
            <i className="bi bi-arrow-right fs-5"></i>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

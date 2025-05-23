import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";

const NewsCard = ({ resource }) => {
    const truncatedDescription = resource.description.length > 150 
        ? resource.description.substring(0, 150)
        : resource.description;

    return (
        <div className="news-card position-relative">
            <div className="image-box position-relative mb-4">
                <img 
                    src={resource.featuredImage} 
                    alt={resource.title} 
                    className="news-image w-100 h-100 object-fit-cover" 
                />
                <span className="category-badge position-absolute">
                    {resource.category}
                </span>
            </div>
            <h4 className="news-title mb-3">{resource.title}</h4>
            <p className="news-date">{resource.date}</p>
            <p className="news-description">
                {truncatedDescription}
                {resource.description.length > 150 && (
                    <Link to="/news-and-resources/news-inner-page" className="ms-1">
                    Read More...
                    </Link>
                )}
            </p>
        </div>
    );
};

export default NewsCard;
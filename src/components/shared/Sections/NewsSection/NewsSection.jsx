// NewsSection.jsx (Updated to handle relatedResources prop)
import React, { useState } from "react";
import "./NewsSection.css";
import NewsCard from "../../Elements/NewsCard/NewsCard";
import resourcesData from "../../../Data/ResourcesData";
import searchIcon from "../../../../assets/Images/search-icon.svg";
import searchCrossIcon from "../../../../assets/Images/search-cross-icon.svg";

const NewsSection = ({ title, subTitle, postsPerPage = 12, totalPosts, className, relatedResources }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    // Use relatedResources if provided, else default to published
    let baseResources = relatedResources || resourcesData.filter(resource => 
        resource.publish && new Date(resource.createdAt) <= new Date('2025-11-08')
    );

    // Filter based on search query and category
    const filteredResources = baseResources.filter((resource) => {
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                              resource.subTitle.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                              resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase().trim());
        const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Apply totalPosts limit if defined
    const limitedResources = totalPosts ? filteredResources.slice(0, totalPosts) : filteredResources;

    // Slice for initial load or all
    const displayedResources = showAll ? limitedResources : limitedResources.slice(0, postsPerPage);

    // Unique categories
    const categories = ["All", ...new Set(baseResources.map((resource) => resource.category))];

    // Handle search
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowAll(false); // Reset on search
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setShowAll(false);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowAll(false); // Reset on category change
    };

    // Toggle show all
    const handleShowAll = () => {
        setShowAll(!showAll);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`news-section ${className}`}>
            <div className="container-fluid px-lg-5">
                {title && (
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-h2 text-center mb-3">{title}</h2>
                            {subTitle && <p className="text-center text-muted mb-5 fs-5">{subTitle}</p>}
                        </div>
                    </div>
                )}
                <div className="row g-5 flex-md-row flex-column-reverse row-gap-50 my-0">
                    {/* Left Column: News Cards */}
                    <div className="col-lg-9 col-md-7 mt-0">
                        {displayedResources.length > 0 ? (
                            <div className="news-grid">
                                {displayedResources.map((resource) => (
                                    <NewsCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted fs-4 py-5">
                                No resources found matching your search.
                            </p>
                        )}
                        {/* View All Button */}
                        {!showAll && limitedResources.length > postsPerPage && (
                            <div className="text-center mt-5">
                                <button 
                                    className="btn btn-outline-primary px-4 py-2 fw-medium" 
                                    onClick={handleShowAll}
                                    style={{ cursor: "pointer", borderRadius: "25px" }}
                                >
                                    View All Resources <i className="bi bi-arrow-down ms-2"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Filters */}
                    <div className="col-lg-3 col-md-5 mt-0">
                        <div className="filter-box sticky-top">
                            {/* Search Section */}
                            <div className="search-section mb-4 pb-3 border-bottom">
                                <h5 className="filter-heading mb-3">Search</h5>
                                <div className="search-box position-relative">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search resources..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    {searchQuery ? (
                                        <img
                                            src={searchCrossIcon}
                                            alt="Clear Search"
                                            className="search-icon position-absolute"
                                            style={{ cursor: "pointer" }}
                                            onClick={handleClearSearch}
                                        />
                                    ) : (
                                        <img
                                            src={searchIcon}
                                            alt="Search"
                                            className="search-icon position-absolute"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Category Section */}
                            <div className="category-section pb-3 border-bottom">
                                <h5 className="filter-heading mb-3">Categories</h5>
                                <div className="d-flex flex-column gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className={`category-btn p-2 text-start border-0 bg-transparent w-100 text-${selectedCategory === category ? "primary fw-bold" : "muted"}`}
                                            onClick={() => handleCategoryChange(category)}
                                            style={{ 
                                                cursor: "pointer",
                                                borderRadius: "5px",
                                                transition: "all 0.3s ease"
                                            }}
                                            onMouseEnter={(e) => { if (selectedCategory !== category) e.target.style.color = "#0244c0"; }}
                                            onMouseLeave={(e) => { if (selectedCategory !== category) e.target.style.color = ""; }}
                                        >
                                            {category}
                                            {selectedCategory === category && <i className="bi bi-check-circle ms-2 text-primary"></i>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
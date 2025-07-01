import React, { useState } from "react";
import "./NewsSection.css";
import NewsCard from "../../Elements/NewsCard/NewsCard";
import resourcesData from "../../../Data/ResourcesData";
import searchIcon from "../../../../assets/Images/search-icon.svg";
import searchCrossIcon from "../../../../assets/Images/search-cross-icon.svg";

const NewsSection = ({ title, postsPerPage = 12, totalPosts, className }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter resources based on search query and category
    const filteredResources = resourcesData.filter((resource) => {
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
        const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Apply totalPosts limit if defined
    const limitedResources = totalPosts ? filteredResources.slice(0, totalPosts) : filteredResources;

    // Calculate total pages based on limited resources
    const totalPages = Math.ceil(limitedResources.length / postsPerPage);

    // Get resources for the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentResources = limitedResources.slice(startIndex, startIndex + postsPerPage);

    // Unique categories for the filter (including "All")
    const categories = ["All", ...new Set(resourcesData.map((resource) => resource.category))];

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    // Handle clear search
    const handleClearSearch = () => {
        setSearchQuery("");
        setCurrentPage(1); // Reset to first page on clear
    };

    return (
        <div className={`news-section ${className}`}>
            <div className="container">
                {title && (
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-h2 text-center mb-5">{title}</h2>
                        </div>
                    </div>
                )}
                <div className="row g-5 flex-md-row flex-column-reverse row-gap-50 my-0">
                    {/* Left Column: News Cards */}
                    <div className="col-lg-9 col-md-7 mt-0">
                        {currentResources.length > 0 ? (
                            <div className="news-grid">
                                {currentResources.map((resource) => (
                                    <NewsCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted">
                                No resources found matching your search.
                            </p>
                        )}
                        {totalPages > 1 && (
                            <nav aria-label="Resources pagination" className="mt-5">
                                <ul className="pagination justify-content-center align-items-center">
                                    <li className={`page-item page-arr ${currentPage === 1 ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <i className="bi bi-chevron-left" style={{ color: "#0D1835" }}></i>
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                        <li
                                            key={page}
                                            className={`page-item ${currentPage === page ? "active" : ""}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item page-arr ${currentPage === totalPages ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <i className="bi bi-chevron-right" style={{ color: "#0D1835" }}></i>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>

                    {/* Right Column: Search and Category Filter */}
                    <div className="col-lg-3 col-md-5 mt-0">
                        <div className="filter-box sticky-top">
                            {/* Search Bar */}
                            <div className="search-box mb-5 position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search.."
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

                            {/* Category Filter */}
                            <div className="category-filter">
                                <h5 className="filter-heading mb-3">Categories</h5>
                                <div className="d-flex flex-column gap-10">
                                    {categories.map((category) => (
                                        <div key={category} className="form-check ps-0 mb-0">
                                            <input
                                                type="radio"
                                                className="form-check-input d-none"
                                                id={`category-${category}`}
                                                name="category-filter"
                                                value={category}
                                                checked={selectedCategory === category}
                                                onChange={(e) => {
                                                    setSelectedCategory(e.target.value);
                                                    setCurrentPage(1); // Reset to first page on category change
                                                }}
                                            />
                                            <label
                                                className={`form-check-label ${selectedCategory === category ? "active" : ""}`}
                                                htmlFor={`category-${category}`}
                                            >
                                                {category}
                                            </label>
                                        </div>
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
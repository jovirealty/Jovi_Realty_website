// agent section
import React, { useEffect, useState } from "react";
import "./AgentsSection.css";
import AgentCard from "../../Elements/AgentCard/AgentCard";
import agentsData from "../../../Data/AgentsData";
import useBridgeApi from "../../../../hooks/useBridgeApi";

import searchIcon from "./../../../../assets/Images/search-icon.svg";
import searchCrossIcon from "./../../../../assets/Images/search-cross-icon.svg";

const AgentsSection = ({
  officeMlsId,
  showSearch = true,
  itemsPerPage = 200,
  totalItems,
  title,
  subHead,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Compose OData Filter
  let filter = `OfficeMlsId eq '${officeMlsId}'`;

  const {data, loading, error, refetch, setQueryParams} = useBridgeApi(
    '/Members',
    {
      $filter: filter,
      $top: itemsPerPage,
      // $skip: (currentPage - 1) * itemsPerPage,
      // $orderby: "LastName asc"
    },
    false
  );
  
  // Update queryParams when relevant state changes
  useEffect(() => {
    setQueryParams({
      $filter: filter,
      $top: itemsPerPage,
      // $skip: (currentPage - 1) * itemsPerPage,
      // $orderby: "LastName asc"
    });
  }, [filter, currentPage, itemsPerPage, setQueryParams]);

  // Map Api data (with safety for nulls)
  const agents = data?.value || [];
  const count = data?.["@data.count"] || 0;
  const calculatedTotalPages = Math.ceil(count / itemsPerPage);

  // Filter agents based on search query (first or last name)
  const filteredAgents = agentsData.filter((agent) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase().trim();
    const [firstName, lastName] = agent.name.toLowerCase().split(" ");
    return (
      (firstName && firstName.includes(query)) ||
      (lastName && lastName.includes(query)) ||
      agent.name.toLowerCase().includes(query)
    );
  });

  // Apply totalItems limit if defined
  const limitedAgents = totalItems
    ? filteredAgents.slice(0, totalItems)
    : filteredAgents;

  // Calculate total pages based on limited agents
  const totalPages = Math.ceil(limitedAgents.length / itemsPerPage);

  // Get agents for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAgents = limitedAgents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if(page >= 1 && page <= calculatedTotalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <>
      {showSearch && (
        <div className="search-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-box position-relative">
                  <input
                    type="text"
                    className="form-control search-input mb-0"
                    placeholder="Search by Agent First/Last Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery ? (
                    <img
                      src={searchCrossIcon}
                      alt="Clear"
                      className="search-icon position-absolute"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSearchQuery("")}
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
            </div>
          </div>
        </div>
      )}
      <div className="agents-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {subHead && (
                <h4 className="sub-heading text-center">{subHead}</h4>
              )}
              <h2 className="main-h2 text-center mb-5">{title}</h2>
              {loading && <div className="text-center">Loading...</div>}
              {error && <div className="text-center text-danger">Error loading agents.</div>}
              {!loading && agents.length > 0 ? (
                <div className="agents-grid">
                  {agents.map((agent) => (
                    <AgentCard key={agent.MemberMlsId || agent.id} agent={agent} />
                  ))}
                </div>
              ) : (!loading && <p className="text-center">No agents found matching your search.</p>)}
            </div>
          </div>
          {calculatedTotalPages > 1 && (
            <nav aria-label="Agents pagination" className="mt-5">
              <ul className="pagination justify-content-center align-items-center flex-wrap">
                <li className={`page-item page-arr ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i
                      className="bi bi-chevron-left"
                      style={{ color: "#0D1835" }}
                    ></i>
                  </button>
                </li>
                {Array.from({ length: calculatedTotalPages }, (_, index) => index + 1).map((page) => (
                  <li
                    key={page}
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item page-arr ${
                    currentPage === calculatedTotalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === calculatedTotalPages}
                  >
                    <i
                      className="bi bi-chevron-right"
                      style={{ color: "#0D1835" }}
                    ></i>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default AgentsSection;
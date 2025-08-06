import { lazy, useEffect, useState } from "react";
import "./AgentsSection.css";
import AgentCard from "../../Elements/AgentCard/AgentCard";
import agentsData from "../../../Data/AgentsData";
import useApis from "../../../../hooks/useApis";
import AgentCardsSkeleton from "../../../Skeletons/AgentsPageSkeleton/AgentCardsSkeleton/AgentCardsSkeleton";
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
  console.log("search query: ", searchQuery);

  const { data, loading, error, refetch, setParams } = useApis(
    '/agents',
    { 
      search: searchQuery,
      lazy: false,
    }
  );

  // Map API data (with safety for nulls)
  const agents = data?.agents || [];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setParams({ search: searchQuery, lazy: false });
    refetch();
  }, [searchQuery]);

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
              {loading && <AgentCardsSkeleton />}
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
        </div>
      </div>
    </>
  );
};

export default AgentsSection;
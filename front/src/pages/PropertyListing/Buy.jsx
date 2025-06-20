import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import useBridgeApi from "../../hooks/useBridgeApi";
import PropertyCardSkeleton from "../../components/shared/Elements/PropertyCard/PropertyCardSkeleton";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import EmptySection from "../../components/shared/Sections/EmptySection/EmptySection";
import SearchBar from "../../components/shared/Elements/SearchBar/SearchBar";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import propertyBannerImg from "./../../assets/Images/property-banner.png";

const Buy = () => {
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  
  const [activeTab, setActiveTab] = useState("buy");
  const [filter, setFilter] = useState({
    location: query.get("location") || "",
    bedrooms: query.get("bedrooms") || "",
    type: query.get("type") || "",
    priceRange: query.get("priceRange") || "",
  });
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 200;
  
  const status = "For Sale";

  const buildApiFilter = (filterObj) => {
    const clause = [
      "StandardStatus eq 'Active'",
      "PropertyType eq 'Residential'"
    ];
    if(filterObj.location) clause.push(`City eq '${filterObj.location}'`);
    if(filterObj.bedrooms) {
      clause.push(`BedroomsTotal eq ${filterObj.bedrooms}`);
      // clause.push(`BedroomsTotal le ${filterObj.bedrooms}`);
    }
    if(filterObj.type) clause.push(`PropertySubType eq '${filterObj.type}'`);
    if(filterObj.priceRange) {
      const [min, max] = filterObj.priceRange.split("-");
      clause.push(`ListPrice ge ${min}`);
      clause.push(`ListPrice ge ${max}`);
    }
    return clause.join(" and ");
  }

  // Odata filter for API
  const filterString = useMemo(() => buildApiFilter(filter), [filter]);

  const {data, loading, error, refetch, setQueryParams} = useBridgeApi(
    '/Property',
    {
      $filter: filterString,
      $top: itemsPerPage,
      $skip: (currentPage - 1) * itemsPerPage,
      $orderby: "ListPrice asc",
    },
    false
  );

  console.log("buy data: ", data);

  const handleFilterChange = (filterObj) => {
    setFilter(filterObj);
    setCurrentPage(1);
  };

  useEffect(() => {
    setQueryParams({
      $filter: filterString,
      $top: itemsPerPage,
      $skip: (currentPage - 1) * itemsPerPage,
      $orderby: "ListPrice asc"
    });
    refetch();
    // eslint-disable-next-line
  }, [filterString, currentPage]);

  useEffect(() => {
    if (data) {
    let properties = data.value || [];
    // Find the "special" card
    const specialProperty = properties.find((p) => p.ListOfficeMlsId === "V005048");
    // Filter it out from the rest
    const rest = properties.filter((p) => !(p.ListOfficeMlsId === "V005048"));
    // If found, put it first
    if (specialProperty) {
      setItems([specialProperty, ...rest]);
    } else {
      setItems(properties);
    }
    setTotalItems(data["@odata.count"] || 0);
  }
  }, [data]);

  useEffect(() => {
    setActiveTab(location.pathname.includes("/rent") ? "rent" : "buy");
  }, [location.pathname]);

  return (
    <div className="property-listing property-listing-buy">
      <Header />
      <Banner backgroundImage={propertyBannerImg} title="Property Listing" />
      <EmptySection className="search-bar-dark">
        <SearchBar 
          onFilterChange={handleFilterChange}
          isHomepage={false}
          defaultLocation={filter.location}
          defaultBedrooms={filter.bedrooms}
          defaultType={filter.type}
          defaultPriceRange={filter.priceRange}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setFilter({ location: "", bedrooms: "", type: "", priceRange: "" });
            setCurrentPage(1);}}
        />
      </EmptySection>
      {loading ? 
      (
        <div className="property-grid-section">
          <div className="container">
            <div className="properties-grid">
              {Array.from({ length: 20 }).map((_, idx) => (
                <PropertyCardSkeleton key={idx} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <PropertyGrid
          title="Luxury Homes for Sale"
          properties={items}
          status={status}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      )}

      {error && <p>Error loading properties.</p>}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Buy;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useBridgeApi from "../../hooks/useBridgeApi";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import EmptySection from "../../components/shared/Sections/EmptySection/EmptySection";
import SearchBar from "../../components/shared/Elements/SearchBar/SearchBar";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import propertyBannerImg from "./../../assets/Images/property-banner.png";

const Buy = () => {
  const [filter, setFilter] = useState("StandardStatus eq 'Active' and PropertyType eq 'Residential'");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 200;
  
  const status = "For Sale";

  const {data, loading, error, refetch, setQueryParams} = useBridgeApi(
    '/Property',
    {
      $filter: filter,
      $top: itemsPerPage,
      $skip: (currentPage - 1) * itemsPerPage,
      $orderby: "ListPrice asc",
    },
    false
  );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    setQueryParams({
      $filter: filter,
      $top: itemsPerPage,
      $skip: (currentPage - 1) * itemsPerPage,
      $orderby: "ListPrice asc"
    });
    refetch();
    // eslint-disable-next-line
  }, [filter, currentPage]);

  useEffect(() => {
    if (data) {
      setItems(data.value || []);
      setTotalItems(data["@odata.count"] || 0);
    }
  }, [data]);

  return (
    <div className="property-listing property-listing-buy">
      <Header />
      <Banner backgroundImage={propertyBannerImg} title="Property Listing" />
      <EmptySection className="search-bar-dark">
        <SearchBar onFilterChange={handleFilterChange} />
      </EmptySection>
      <PropertyGrid
        title="Luxury Homes for Sale"
        properties={items}
        status={status}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
      {loading && <p>Loading properties...</p>}
      {error && <p>Error loading properties.</p>}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Buy;
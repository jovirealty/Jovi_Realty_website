import React, { useState } from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import EmptySection from "../../components/shared/Sections/EmptySection/EmptySection";
import SearchBar from "../../components/shared/Elements/SearchBar/SearchBar";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import propertyBannerImg from "./../../assets/Images/property-banner.png";
import PropertiesData from "../../components/Data/PropertiesData";
import { useLocation } from "react-router-dom";

const Buy = () => {
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const status = "For Sale";

  const handleFilterChange = (apiDataArray, filterStatus) => {
    // 1) “Console the entire API result” (just the array of objects)
    console.log("Buy Route: Received API data:", apiDataArray);

    // 2) If you want to “enrich” or “merge” with local data, do it here.
    //    But the problem statement just asked us to console the raw data.
    //    So we simply feed it straight into <PropertyGrid>.
    setFilteredProperties(apiDataArray);
  };

  return (
    <div className="property-listing property-listing-buy">
      <Header />
      <Banner backgroundImage={propertyBannerImg} title="Property Listing" />
      <EmptySection className="search-bar-dark">
        <SearchBar onFilterChange={handleFilterChange} />
      </EmptySection>
      <PropertyGrid
        title="Luxury Homes for Sale"
        properties={filteredProperties}
        status={status}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Buy;
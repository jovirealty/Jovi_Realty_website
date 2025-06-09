import React, { useState } from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import EmptySection from "../../components/shared/Sections/EmptySection/EmptySection";
import SearchBar from "../../components/shared/Elements/SearchBar/SearchBar";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import PropertiesData from "../../components/Data/PropertiesData";

import propertyBannerImg from './../../assets/Images/property-banner.png';
import { useLocation } from "react-router-dom";

const Rent = () => {
 const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const status = "For Rent";

  const handleFilterChange = (apiDataArray, filterStatus) => {
    console.log("Rent Route: Received API data:", apiDataArray);
    setFilteredProperties(apiDataArray);
  };




  return (
    <div className="property-listing property-listing-rent">
      <Header />
      <Banner
        backgroundImage={propertyBannerImg}
        title="Property Listing"
      />
      <EmptySection className="search-bar-dark">
        <SearchBar onFilterChange={handleFilterChange}/>
      </EmptySection>
      <PropertyGrid title="Luxury Homes for Rent"
        properties={filteredProperties}
        status={status} />
      <CTASection />
      <Footer />
    </div>
  );
};


export default Rent;
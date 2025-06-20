import React from "react";
import { useParams } from "react-router-dom";
import useBridgeApi from "../../hooks/useBridgeApi";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import GallerySection from "../../components/shared/Sections/Gallery/Gallery";
import PropertyDetails from "../../components/shared/Sections/PropertyDetails/PropertyDetails";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";

const PropertyInner = () => {
  const { listingKey } = useParams();

  const { data: property, error, loading } = useBridgeApi(
    `/Property(${listingKey})`,
    {},
    false,
  );
  
  return (
    <div className="property-listing property-listing-rent">
      <Header />
      {property ? (
        <>
          <GallerySection propertyMedia={property.Media} />
          <PropertyDetails propertyInfo={property} />
          <PropertyGrid statusFilter="For Sale" title="Explore Similar Property" totalItems={4} />
          <CTASection />
        </>
      ) : (
        <div>Loading</div>
      )}
      <Footer />
    </div>
  );
};

export default PropertyInner;
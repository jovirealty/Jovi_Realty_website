import React from "react";
import { useParams } from "react-router-dom";
import useBridgeApi from "../../hooks/useBridgeApi";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import GallerySection from "../../components/shared/Sections/Gallery/Gallery";
import PropertyDetails from "../../components/shared/Sections/PropertyDetails/PropertyDetails";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import GallerySkeleton from "../../components/shared/Sections/Gallery/GallerySkeleton";
import PropertyDetailsSkeleton from "../../components/shared/Sections/PropertyDetails/PropertyDetailsSkeleton";

const PropertyInner = () => {
  const { listingKey } = useParams();

  const { data: property, error, loading } = useBridgeApi(
    `/Property(${listingKey})`,
    {},
    false,
  );
  console.log("property value: ", property);
  return (
    <div className="property-listing property-listing-rent">
      <Header />
        {loading ? (
          <>
            <GallerySkeleton />
            <PropertyDetailsSkeleton />
          </>
        ) : property ? (
          <>
            <GallerySection 
              PropertyStatus={property.PropertyType}
              propertyMedia={property.Media} 
              PhotosCount={property.PhotosCount} 
            />
            <PropertyDetails propertyInfo={property} />
            {/* <PropertyGrid statusFilter="For Sale" title="Explore Similar Property" totalItems={4} /> */}
            <CTASection />
          </>
        ) : error ? (
          <div className="text-center my-5 text-danger">Unable to load property.</div>
        ) : null}
      <Footer />
    </div>
  );
};

export default PropertyInner;
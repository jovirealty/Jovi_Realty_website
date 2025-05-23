import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import GallerySection from "../../components/shared/Sections/Gallery/Gallery";
import PropertyDetails from "../../components/shared/Sections/PropertyDetails/PropertyDetails";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";

import media1 from "./../../assets/Images/property-img-1.png";
import media2 from "./../../assets/Images/property-img-2.png";
import media3 from "./../../assets/Images/property-img-3.png";
import media4 from "./../../assets/Images/property-img-4.png";
import media5 from "./../../assets/Images/property-img-5.png";

const mediaItems = [
    media1,
    media2,
    media3,
    media4,
    media5,
    media3
];

const PropertyInner = () => {
  return (
    <div className="property-listing property-listing-rent">
      <Header />
      <GallerySection media={mediaItems} />
      <PropertyDetails />
      <PropertyGrid statusFilter="For Sale" title="Explore Similar Property" totalItems={4} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default PropertyInner;
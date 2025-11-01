import React from "react";

import Header from "../../../components/shared/Sections/Header/header";
import Footer from "../../../components/shared/Sections/Footer/footer";
import GallerySection from "../../../components/shared/Sections/Gallery/Gallery";
import PropertyDetails from "../../../components/shared/Sections/PropertyDetails/PropertyDetails";
import CTASection from "../../../components/shared/Sections/CTASection/CTASection";

/**
 * STATIC MOCK PROPERTY:
 * Always rendered for any /off-market-listings/* route.
 * Uses the same data shape your PropertyDetails & Gallery expect.
 */
const STATIC_OFFMARKET_PROPERTY = {
  ListingKey: "OFF-1002",
  ListingId: "R7654321",
  StandardStatus: "Off Market",
  PropertyType: "Residential Detached",
  PropertySubType: "House/Single Family",
  ListPrice: 1499000,
  UnitNumber: "",
  StreetNumber: "4567",
  StreetName: "Kingsway",
  StreetSuffix: "",
  City: "Burnaby",
  StateOrProvince: "BC",
  PostalCode: "V5H2B3",
  BedroomsTotal: 4,
  BathroomsTotalInteger: 3,
  BathroomsHalf: 1,
  BuildingAreaTotal: 2105,
  LivingArea: 2105,
  BCRES_MainFloorFinishedArea: 1200,
  ParkingTotal: 4,
  ListAgentMlsId: "JOVI-AG02",
  ListAgentKey: "AGENT-KEY-02",
  ListOfficeKey: "OFFICE-KEY-01",
  ListingContractDate: "2024-09-02",
  YearBuilt: 1998,
  PublicRemarks:
    "Family home with a private yard and renovated kitchen. Close to Metrotown and SkyTrain.",
  Latitude: "49.2276",
  Longitude: "-123.0076",
  InteriorFeatures: ["Kitchen Island", "Skylight"],
  HeatingYN: true,
  Heating: ["Forced Air", "Natural Gas"],
  CoolingYN: true,
  Cooling: ["Central Air"],
  FireplacesTotal: 1,
  FireplaceYN: true,
  FireplaceFeatures: ["Gas"],
  LaundryFeatures: ["Laundry Room"],
  Appliances: ["Range - Gas", "Dishwasher", "Refrigerator", "Washer/Dryer"],
  LotSizeArea: 0.12,
  LotSizeAcres: 0.12,
  LotSizeSquareFeet: 5227,
  LotSizeDimensions: "Irregular",
  LotFeatures: ["Lane Access", "Private Yard"],
  OpenParkingYN: true,
  ParkingFeatures: ["Carport", "Garage"],
  ViewYN: false,
  BCRES_ViewDescription: "",
  ExteriorFeatures: ["Patio", "Fenced Yard"],
  Ownership: "Freehold",
  AssociationAmenities: [],
  PetsAllowed: ["Yes"],
  TaxYear: 2024,
  TaxAnnualAmount: 4312.78,
  Media: [
    { MediaURL: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600" },
    { MediaURL: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600" },
    { MediaURL: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600" },
    { MediaURL: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600" }
  ],
};

const OffMarketListingsInner = () => {
  const property = {
    ...STATIC_OFFMARKET_PROPERTY,
    PhotosCount: Array.isArray(STATIC_OFFMARKET_PROPERTY.Media)
      ? STATIC_OFFMARKET_PROPERTY.Media.length
      : 0,
  };

  return (
    <div className="property-listing property-listing-rent">
      <Header />

      <GallerySection
        PropertyStatus={property.PropertyType}
        propertyMedia={property.Media}
        PhotosCount={property.PhotosCount}
      />

      <PropertyDetails propertyInfo={property} />

      <CTASection />

      <Footer />
    </div>
  );
};

export default OffMarketListingsInner;

import React, { useMemo, useState } from "react";
import Header from "../../../components/shared/Sections/Header/header";
import Footer from "../../../components/shared/Sections/Footer/footer";
import PropertyGrid from "../../../components/shared/Sections/PropertyGrid/PropertyGrid";

// ---- Utils
const norm = (v) => String(v ?? "").toLowerCase().trim();
const buildAddress = (p) =>
  [p.UnitNumber, p.StreetNumber, p.StreetName, p.StreetSuffix, p.City, p.Province, p.PostalCode]
    .filter(Boolean)
    .join(" ");
const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ---- Mock data (original)
const rawData = [
  {
    ListingKey: "OFF-1001",
    ListingId: "R1234567",
    ListOfficeMlsId: "JOVI01",
    ListPrice: 899000,
    City: "Vancouver",
    UnitNumber: "1203",
    StreetNumber: "889",
    StreetName: "Pacific",
    StreetSuffix: "St",
    Province: "BC",
    PostalCode: "V6Z1C3",
    BedroomsTotal: 2,
    BathroomsTotalInteger: 2,
    BuildingAreaTotal: 985,
    Media: [{ MediaURL: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600" }],
  },
  {
    ListingKey: "OFF-1002",
    ListingId: "R7654321",
    ListOfficeMlsId: "JOVI01",
    ListPrice: 1499000,
    City: "Burnaby",
    UnitNumber: "",
    StreetNumber: "4567",
    StreetName: "Kingsway",
    StreetSuffix: "",
    Province: "BC",
    PostalCode: "V5H2B3",
    BedroomsTotal: 4,
    BathroomsTotalInteger: 3,
    BuildingAreaTotal: 2105,
    Media: [{ MediaURL: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600" }],
  },
  {
    ListingKey: "OFF-1003",
    ListingId: "R9988776",
    ListOfficeMlsId: "JOVI02",
    ListPrice: 739000,
    City: "Surrey",
    UnitNumber: "5",
    StreetNumber: "16728",
    StreetName: "27A",
    StreetSuffix: "Ave",
    Province: "BC",
    PostalCode: "V3Z0P9",
    BedroomsTotal: 3,
    BathroomsTotalInteger: 3,
    BuildingAreaTotal: 1420,
    Media: [{ MediaURL: "" }],
  },
  {
    ListingKey: "OFF-1004",
    ListingId: "R1122334",
    ListOfficeMlsId: "JOVI02",
    ListPrice: 2199000,
    City: "West Vancouver",
    UnitNumber: "",
    StreetNumber: "1155",
    StreetName: "Keith",
    StreetSuffix: "Rd",
    Province: "BC",
    PostalCode: "V7T1M8",
    BedroomsTotal: 5,
    BathroomsTotalInteger: 4,
    BuildingAreaTotal: 3180,
    Media: [{ MediaURL: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600" }],
  },
];

// Normalize for grid/card + route
const data = rawData.map((p) => {
  const fullAddress = buildAddress(p);
  return {
    ...p,
    fullAddress,
    addressSlug: slugify(fullAddress),
  };
});

// Route helper for the card/grid to link to inner page
const buildDetailsPath = (p) => `/off-market-listings/${encodeURIComponent(p.addressSlug)}/${encodeURIComponent(p.ListingKey)}`;

export default function OffMarketListings() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filtered = useMemo(() => {
    const q = norm(query);
    if (!q) return data;

    const byPrice = Number(q.replace(/[^0-9]/g, ""));
    return data.filter((p) => {
      const address = p.fullAddress.toLowerCase();
      return (
        norm(p.City).includes(q) ||
        norm(p.ListingId).includes(q) ||
        address.includes(q) ||
        (!!byPrice && Number(p.ListPrice) >= byPrice * 0.9 && Number(p.ListPrice) <= byPrice * 1.1)
      );
    });
  }, [query]);

  React.useEffect(() => setPage(1), [query]);

  const totalItems = filtered.length;
  const paged = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="d-flex gap-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search by city, MLS® ID, address, or price…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search listings"
              />
              {query ? (
                <button className="btn btn-outline-secondary" onClick={() => setQuery("")} aria-label="Clear search">
                  Clear
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <PropertyGrid
        title="Off-Market Listings"
        status="Off Market"
        // pass under several names so existing grid versions pick one:
        properties={paged}
        propertyData={paged}
        data={paged}
        listings={paged}
        currentPage={page}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={setPage}
        // let the grid (or card) compose the correct details URL
        buildDetailsPath={buildDetailsPath}
      />

      <Footer />
    </>
  );
}

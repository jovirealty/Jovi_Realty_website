import React from "react";
import './Banner.css';
import SearchBar from "../../shared/Elements/SearchBar/SearchBar";

const Banner = () => {
  return (
    <section className="home-banner-section position-relative text-center d-flex flex-column justify-content-center align-items-center">
      <div className="container text-white">
        <h1 className="main-h1">Real Estate, Real People, Real Results - Across Greater Vancouver</h1>
        <p className="banner-subtitle">
          Buying your first home, selling your property, managing investments, or building your career in real estate? Jovi Realty is where expertise meets support, every step of the way.
        </p>
      </div>
      <SearchBar isHomepage={true} />
    </section>
  );
};

export default Banner;

import React from "react";
import './Banner.css';
import SearchBar from "../../shared/Elements/SearchBar/SearchBar";

const Banner = () => {
  return (
    <section className="home-banner-section position-relative text-center d-flex flex-column justify-content-center align-items-center">
      <div className="container text-white">
        <h1 className="main-h1">Find Your Dream Home with Jovi Realty</h1>
        <p className="banner-subtitle">
          Whether you're looking to upgrade, relocate, or invest, our agents are
          here to help
        </p>
      </div>
      <SearchBar isHomepage={true} />
    </section>
  );
};

export default Banner;

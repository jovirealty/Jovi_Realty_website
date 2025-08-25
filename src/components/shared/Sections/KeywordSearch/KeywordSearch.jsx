import React from 'react';
import './KeywordSearch.css';

const keywords = [
  "Condos for Sale",
  "Townhouses for Sale",
  "Find an Agent",
  "Homes Under $500k",
  "Vancouver Homes Under $1M",
  "Burnaby Condos Under $500k",
  "New Listings",
  "Townhomes Under $800k",
  "Langley Townhouses",
  "Coquitlam Condos",
  "Richmond Houses"
]

const KeywordSearch = () => {
  return (
    <section className="keyword-search-sec">
      <div className="container">
        <h2 className="main-h2 text-center">Quick Search Links</h2>
        <div className="keywords-con mt-5">
          {keywords.map((keyword, index) => (
            <a href="#" key={index}>
              <button className="btn btn-secondary">{keyword}</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordSearch; 
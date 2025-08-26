import React from 'react';
import './KeywordSearch.css';

const keywords = [
  {
    "label": "Condos for Sale",
    "link": "http://jovirealty.com/property-listing/buy?type=Apartment%2FCondo"
  },
  {
    "label": "Townhouses for Sale",
    "link": "https://jovirealty.com/property-listing/buy?type=Townhouse"
  },
  {
    "label": "Find an Agent",
    "link": "https://jovirealty.com/find-an-agent"
  },
  {
    "label": "Homes Under $500k",
    "link": "https://jovirealty.com/property-listing/buy?priceRange=500000-1000000"
  },
  {
    "label": "Vancouver Homes Under $1M",
    "link": "https://jovirealty.com/property-listing/buy?location=North+Vancouver&priceRange=500000-1000000"
  },
  {
    "label": "Burnaby Condos Under $500k",
    "link": "https://jovirealty.com/property-listing/buy?location=Burnaby&priceRange=500000-1000000"
  },
  {
    "label": "New Listings",
    "link": "https://jovirealty.com/property-listing/buy"
  },
  {
    "label": "Townhomes Under $800k",
    "link": "https://jovirealty.com/property-listing/buy?type=Townhouse&priceRange=500000-1000000"
  },
  {
    "label": "Langley Townhouses",
    "link": "https://jovirealty.com/property-listing/buy?location=Langley&type=Townhouse"
  },
  {
    "label": "Coquitlam Condos",
    "link": "https://jovirealty.com/property-listing/buy?location=Coquitlam&type=Apartment%2FCondo"
  },
  {
    "label": "Richmond Houses",
    "link": "https://jovirealty.com/property-listing/buy?location=Richmond&type=Single+Family+Residence"
  }
]

const KeywordSearch = () => {
  return (
    <section className="keyword-search-sec">
      <div className="container">
        <h2 className="main-h2 text-center">Quick Search Links</h2>
        <div className="keywords-con mt-5">
          {keywords.map((keyword, index) => (
            <a href={keyword.link} key={index}>
              <button className="btn btn-secondary">{keyword.label}</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordSearch; 
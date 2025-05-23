import React from 'react';
import './KeywordSearch.css';

const keywords = [
  'Sold Prices',
  'Condos for Sale',
  'Home Appraisal',
  'Houses',
  '2-Bed Condos',
  'Condos for Rent',
  'Condos Under $500K',
  'Houses for Sale',
  'Townhouses for Sale',
  'Find an Agent',
  '3-Bed Houses',
  '1-Bed Condos',
  'Houses for Rent'
];

const KeywordSearch = () => {
  return (
    <section className="keyword-search-sec">
      <div className="container">
        <h2 className="main-h2 text-center">Search by Key-Words</h2>
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
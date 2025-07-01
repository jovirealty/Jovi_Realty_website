import React from 'react';
import './FeatureCards.css';

const FeatureCards = ({ title, cards, className = '', showButton = true, buttonLink = '#', buttonText = 'View More' }) => {
  return (
    <section className={`feature-cards-sec ${className}`}>
      <div className="container">
        <h2 className="main-h2 text-center text-white mb-5">{title}</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="fearure-card-grid">
              {cards.map((card, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-card-img">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <h4 className="feature-card-title">{card.title}</h4>
                  <p className="feature-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
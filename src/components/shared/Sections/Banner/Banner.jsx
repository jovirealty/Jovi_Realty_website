import React from 'react';
import './Banner.css';

const Banner = ({ backgroundImage, title, subtitle, className = '' }) => {
    return (
        <div 
            className={`banner ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container"> 
                <div className="banner-content position-relative">
                    <h1 className="main-h1">{title}</h1>
                    {subtitle && <p className="banner-subtitle">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default Banner;

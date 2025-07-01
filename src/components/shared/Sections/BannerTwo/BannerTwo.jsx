import React from 'react';
import { Link } from 'react-router-dom';
import './BannerTwo.css';

const BannerTwo = ({ backgroundImage, title, bannerText, buttonText1, buttonLink1, buttonText2, buttonLink2, className = '' }) => {
    return (
        <div
            className={`banner-two ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container">
                <div className="banner-two-content d-flex flex-column row-gap-40 text-white position-relative">
                    <h1 className="main-h1">{title}</h1>
                    {bannerText && <p className="banner-text mb-0">{bannerText}</p>}
                    <div className="d-flex column-gap-20">
                        {buttonText1 && <Link to={buttonLink1} className="btn btn-forth">{buttonText1}</Link>}
                        {buttonText2 && <Link to={buttonLink2} className="btn btn-fifth">{buttonText2}</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;

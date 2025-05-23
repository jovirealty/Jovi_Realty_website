import React from 'react';
import './IconBoxSectionTwo.css';

const IconBoxSectionTwo = ({ className = '', items = [], title }) => {
    return (
        <section className={`icon-box-section-two text-white text-center ${className}`}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="main-h2 text-white">{title}</h2>
                    </div>
                </div>
                <div className="row row-gap-30">
                    {items.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="icon-box-two d-flex flex-column align-items-center row-gap-20">
                                <img src={item.icon || '/path/to/fallback.png'} alt={item.title || 'Icon'} className="icon-box-img" />
                                <h4 className="mb-2">{item.title || 'Untitled'}</h4>
                                <p className="mb-0">{item.description || 'No description available'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IconBoxSectionTwo;
import React from 'react';
import './BoxedContentImage.css';

const BoxedContentImage = ({
    subtitle,
    title,
    description,
    image,
    reverseOrder = false,
    contentClassName = "content-wrapper",
    className = ''
}) => {
    const contentColumn = (
        <div className="col-lg-6 text-white">
            <div className={contentClassName}>
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
                {title && <h2 className="secondary-h2">{title}</h2>}
                {description && <p className="description">{description}</p>}
            </div>
        </div>
    );

    const imageColumn = (
        <div className="col-lg-6">
            <div className="image-wrapper">
                <img src={image} alt={title || "Content Image"} className="img-fluid" />
            </div>
        </div>
    );

    return (
        <section className={`content-image-section ${className}`}>
            <div className="container">
                <div className={`row row-gap-40 flex-column-reverse flex-lg-row ${reverseOrder ? 'flex-lg-row-reverse' : ''}`}>
                    {contentColumn}
                    {imageColumn}
                </div>
            </div>
        </section>
    );
};

export default BoxedContentImage; 
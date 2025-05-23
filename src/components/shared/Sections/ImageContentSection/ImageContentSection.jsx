import React from 'react';
import './ImageContentSection.css';
import { Link, NavLink } from 'react-router-dom';

const ImageContentSection = ({ 
  title, 
  description, 
  image, 
  buttonText,
  buttonLink,
  useH2 = false,
  className = ''
}) => {
  return (
    <section className={`image-content-sec ${className}`}>
      <div className="container">
        <div className="row image-content-con align-items-center row-gap-50">
          <div className="col-md-6 p-lg-0">
            <div className="img">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              {useH2 ? (
                <h2 className='secondary-h2 mb-4'>{title}</h2>
              ) : (
                <h4 className='main-h4'>{title}</h4>
              )}
              <p>{description}</p>
              {buttonText && (
                <NavLink to={buttonLink} className="btn btn-primary">
                    {buttonText} <i className="bi bi-arrow-right-short"></i>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection; 
import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';
import resourceCard1 from './../../../../assets/Images/resources-card-1.png';
import resourceCard2 from './../../../../assets/Images/resources-card-2.png';
import resourceCard3 from './../../../../assets/Images/resources-card-3.png';
import resourceCard4 from './../../../../assets/Images/resources-card-4.png';
import resourceAdd from './../../../../assets/Images/resources-add.png';

const resources = [
  {
    title: 'Buy Smart',
    mainImage: resourceCard1,
    addImage: resourceAdd,
    link: '#'
  },
  {
    title: 'Selling Success',
    mainImage: resourceCard2,
    addImage: resourceAdd,
    link: '#'
  },
  {
    title: 'Effortless Management',
    mainImage: resourceCard3,
    addImage: resourceAdd,
    link: '#'
  },
  {
    title: 'Agent Advantage',
    mainImage: resourceCard4,
    addImage: resourceAdd,
    link: '#'
  }
];

const Resources = ({ className = '' }) => {
  return (
    <section className={`resources-sec ${className}`}>
      <div className="container">
        <h2 className="main-h2 text-center mb-5">Resources</h2>
        <div className="row row-gap-30 m-0">
          {resources.map((resource, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 p-0">
              <div className="resources-card">
                <h4 className="card-title">{resource.title}</h4>
                <div className="img">
                  <a href={resource.link} className="add-btn">
                    <img src={resource.addImage} alt="Add" />
                  </a>
                  <img src={resource.mainImage} alt={resource.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources; 
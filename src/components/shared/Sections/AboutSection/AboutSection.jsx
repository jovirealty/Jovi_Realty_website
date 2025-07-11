import React from 'react';
import './AboutSection.css';
import aboutImg from './../../../../assets/Images/about.png';

const AboutSection = () => {
  return (
    <section className="about-jovi-sec">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center row-gap-50">
          <div className="col-lg-6 left-col">
            <div className="about-con">
              <h4 className="main-h4 mb-3">About Jovi Realty</h4>
              <p className="main">
                Locally Grown. Regionally Trusted. Results That Speak.
              </p>
              <p className='mb-5'>
                We’re an independent brokerage serving the entire Greater Vancouver region. At Jovi Realty, we’re focused on clarity, service, and results. Whether you’re a homeowner, buyer, investor, or agent, you’ll find thoughtful guidance, responsive support, and a team that values relationships over transactions.
              </p>
              <div className="stats">
                <div className="each">
                  <span className="nums">5K+</span>
                  <span className="border-between"></span>
                  <span className="text">Properties Closed with Care</span>
                </div>
                <div className="each">
                  <span className="nums">130+</span>
                  <span className="border-between"></span>
                  <span className="text">Agents Thriving With Us</span>
                </div>
                <div className="each">
                  <span className="nums">99%</span>
                  <span className="border-between"></span>
                  <span className="text">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right-col">
            <div className="about-img-cont position-relative">
              <div className="about-img-text position-absolute">Your Gateway to Real Estate Success</div>
              <img src={aboutImg} alt="About" className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
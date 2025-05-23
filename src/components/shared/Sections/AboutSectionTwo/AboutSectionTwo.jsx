import React from 'react';
import './AboutSectionTwo.css';
import aboutImg from './../../../../assets/Images/about-2.png';

const AboutSectionTwo = ({ className }) => {
  return (
    <section className={`about-jovi-sec-2 ${className}`}>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center row-gap-50">
          <div className="col-lg-6 left-col">
            <div className="about-con-2">
              <h4 className="main-h4 mb-lg-5 mb-3">About Jovi Realty</h4>
              <p>
                Supporting Realtors with Innovation, Opportunity, and Community. At Jovi Realty, we believe your success is our success. That’s why we go above and beyond to empower agents with personalized support, industry-leading tools, and a collaborative environment where careers thrive.
              </p>
              <div className="stats">
                <div className="each">
                  <span className="nums">01</span>
                  <span className="text">A collaborative team culture where your ideas and ambitions matter.</span>
                </div>
                <div className="each">
                  <span className="nums">02</span>
                  <span className="text">Technology-forward solutions to streamline your workflow and boost productivity.</span>
                </div>
                <div className="each">
                  <span className="nums">03</span>  
                  <span className="text">Mentorship programs that ensure you’re never navigating challenges alone.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right-col">
            <div className="about-img-cont-2 position-relative">
              <img src={aboutImg} alt="About" className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo; 
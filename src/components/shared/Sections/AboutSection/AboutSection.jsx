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
                The Trusted Name in Real Estate – Your Partner in Finding the Perfect Property
              </p>
              <p className='mb-5'>
                At Jovi Realty, we specialize in helping you buy, rent, and sell properties with ease. With years of experience and a commitment to excellence, we're here to make your real estate journey seamless and successful.
              </p>
              <div className="stats">
                <div className="each">
                  <span className="nums">20+</span>
                  <span className="border-between"></span>
                  <span className="text">Years of Combined Experience</span>
                </div>
                <div className="each">
                  <span className="nums">93%</span>
                  <span className="border-between"></span>
                  <span className="text">Unmatched expertise in Off-Plan investments</span>
                </div>
                <div className="each">
                  <span className="nums">23</span>
                  <span className="border-between"></span>
                  <span className="text">Comprehensive solutions for investors & property owners</span>
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
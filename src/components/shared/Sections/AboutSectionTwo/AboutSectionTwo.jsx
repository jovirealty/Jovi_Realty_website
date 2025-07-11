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
              <h4 className="main-h4 mb-lg-5 mb-3">About Jovi Realty – Built for Career-Driven Agents</h4>
              <p>
                Jovi Realty isn’t built on flashy perks or inflated promises—it’s built on the reality of what serious agents need to grow. We offer a brokerage structure that prioritizes clarity, stability, and meaningful support at every stage of your career. Whether you're handling your first deal or scaling a six-figure book of business, you'll find systems that don’t break under pressure and leadership that doesn’t disappear when challenges arise.
              </p>
              <p>Here, you’re not another license on a roster. You’re a partner in a firm that values execution, accountability, and results. We’ve built a space where agents can focus on doing great work—with full operational backing, marketing assistance when needed, and ongoing access to industry insight. If you’re looking for a brokerage that respects your time, supports your goals, and understands the business beyond the basics—Jovi Realty is where you belong.</p>
              {/* <div className="stats">
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
              </div> */}
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
import React from 'react';
import './footer.css';
import { Link, NavLink } from 'react-router-dom';
import footerLogo from "./../../../../assets/Images/jovi-reality-logo-foo.png";
import facebookIcon from "./../../../../assets/Images/facebook-icon.png";
import instaIcon from "./../../../../assets/Images/instagram-icon.png";
import ticktockIcon from "./../../../../assets/Images/ticktok-icon.png";
import linkedinIcon from "./../../../../assets/Images/linkedin-icon.png";
import ytIcon from "./../../../../assets/Images/youtube-icon.png";
import threadsIcon from "./../../../../assets/Images/threads-icon.png";

const Footer = () => {
  // Define social media links
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/jovirealty', icon: facebookIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/jovirealty', icon: instaIcon },
    { name: 'TikTok', url: 'https://www.tiktok.com/@jovirealty', icon: ticktockIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/jovirealty', icon: linkedinIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/@jovirealty4376', icon: ytIcon },
    { name: 'Threads', url: 'https://www.threads.net/@jovirealty', icon: threadsIcon },
  ];

  // Define quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Find an Agent', path: '/find-an-agent' },
    { name: 'Resources', path: '/news-and-resources' },
    { name: 'Property Management', path: '/property-management' },
  ];

  // Define services links
  const serviceLinks = [
    { name: 'Buy Property', path: '/property-listing/buy' },
    { name: 'Sell Property', path: '/sell' },
    { name: 'Rental Property', path: '/property-listing/rent' },
    { name: 'Highlights', path: '/highlights' },
  ];

  // Define footer bottom links
  const bottomLinks = [
    { name: 'Agent Dashboard', path: '/agent-dashboard' },
    { name: 'DCMA Notice', path: '/dcma-policy' },
    { name: 'Terms of Service', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookies', path: '/cookie-policy' },
  ];

  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-row d-grid">
              {/* Logo & Description */}
              <div className="col-lg-10 ft-links sm-text-center pr-md-5">
                <NavLink to="/" className={({ isActive }) => isActive ? "logo mb-4 active" : "logo mb-4"}>
                  <img src={footerLogo} alt="Jovi Logo" />
                </NavLink>
                <p className="mt-2 mb-4">
                  Jovi Realty simplifies real estate for buyers, sellers, and renters. With decades of expertise, personalized service, and a transparent process, we help you find, sell, or manage properties with confidence. Your dream property starts here.
                </p>
                <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
                  <button className="btn btn-primary">
                    Login <i className="bi bi-arrow-right-short"></i>
                  </button>
                </NavLink>
              </div>

              {/* Quick Links */}
              <div className="sm-text-center mt-sm-3">
                <h4 className="ft-links-title">Quick Links</h4>
                <ul className="list-unstyled ft-links">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <NavLink to={link.path} className={({ isActive }) => isActive ? "active" : ""}>
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="sm-text-center mt-sm-3">
                <h4 className="ft-links-title">Our Services</h4>
                <ul className="list-unstyled ft-links">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <NavLink to={link.path} className={({ isActive }) => isActive ? "active" : ""}>
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="sm-text-center mt-sm-3">
                <div className="ft-links pl-md-5">
                  <h4 className="ft-links-title">Get in Touch</h4>
                  <a href="tel:6042022929">604.202.2929</a>
                  <a href="mailto:hello@jovirealty.com">hello@jovirealty.com</a>
                  <a href="https://maps.app.goo.gl/aQbfJsbgFcHvgJAJA" target="_blank">201-2010 E 48th Ave Vancouver, BC V5P 1R8</a>
                </div>
                <div className="icons">
                  {socialLinks.map((link) => (
                    <Link key={link.name} to={link.url} target="_blank">
                      <img src={link.icon} alt={link.name} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="col-12 mt-5 mb-5">
              <p className="disclaimer">
                <strong>Disclaimer :</strong> The information provided on Jovi Realty is for general informational purposes only. While we strive to ensure the accuracy and reliability of the content, we make no representations or warranties, express or implied, about the completeness, accuracy, suitability, or availability of any information, properties, or services featured on this website.
              </p>
            </div>

            {/* Footer Bottom Links */}
            <div className="row ft-bottom-container">
              <div className="col-12 ft-bottom-content">
                <p>Jovi Realty Inc. Copyright © 2025 Jovi all rights reserved.</p>
                <div className="ft-bottom-links">
                  {bottomLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import './ContactSection.css';

import callIcon from "./../../../assets/Images/call-icon.svg";
import mailIcon from "./../../../assets/Images/mail-icon.svg";
import whatsappIcon from "./../../../assets/Images/whatsapp-icon.svg";
import mapIcon from "./../../../assets/Images/map-icon.svg";

const contactData = [
  {
    icon: callIcon,
    title: "Phone",
    link: "tel:6042022929",
    text: "604.202.2929",
  },
  {
    icon: mailIcon,
    title: "Email",
    link: "mailto:hello@jovirealty.com",
    text: "hello@jovirealty.com",
  },
  {
    icon: whatsappIcon,
    title: "WhatsApp",
    link: "https://wa.me/+16042022929",
    text: "Click to WhatsApp",
    target: "_blank",
  },
  {
    icon: mapIcon,
    title: "Office Address",
    link: "https://maps.app.goo.gl/aQbfJsbgFcHvgJAJA",
    text: "201-2010 E 48th Ave<br/>Vancouver, BC V5P 1R8",
    target: "_blank",
  },
];

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row justify-content-between position-relative">
          <div className="col-12 p-0">
            <div className="contact-details-frame d-grid">
              <div className="col cont-map-col position-relative text-white d-flex flex-column row-gap-20">
                <h5 className="subhead">Contact</h5>
                <h2 className="main-h2">Do you have a question or enquiry for our team?</h2>
                <p>Our dedicated support team is available 24/7 to assist you and answer all your questions.</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.651849520248!2d-123.06797262322732!3d49.22612937475695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674246403c9fd%3A0x1297f5e943f70d38!2sJovi%20Realty%20Inc.!5e0!3m2!1sen!2sin!4v1746108790953!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col cont-details-col d-flex flex-column justify-content-between row-gap-50 position-relative">
                {contactData.map((item, index) => (
                  <div className="cont-info-box d-flex align-items-center column-gap-30" key={index}>
                    <div className="cont-icon">
                      <img src={item.icon} alt={`${item.title} icon`} />
                    </div>
                    <div className="cont-info">
                      <h5 className="mb-1">{item.title}</h5>
                      <a href={item.link} target={item.target || "_self"} dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";
import Resources from "../../components/shared/Sections/Resources/Resources";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import ContactSection from "../../components/ContactUs/ContactSection/ContactSection";

import contactBannerImg from './../../assets/Images/contact-banner.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header />
      <Banner
        backgroundImage={contactBannerImg} title="ContactUs"
      />
      <InquiryForm />
      <ContactSection />
      <Resources className="pt-0" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ContactUs;

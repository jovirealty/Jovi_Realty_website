import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";
import Resources from "../../components/shared/Sections/Resources/Resources";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import ContactSection from "../../components/ContactUs/ContactSection/ContactSection";

import contactBannerImg from './../../assets/Images/contact-banner.png';

const contactUsInquiryHeading = {
  title: "Have a Question or Ready to Chat?",
  subTitle: "Let us know how we can help—buying, selling, managing, or just exploring your options.",
};

const contactUsInquiryFields = [
  { name: "fullName", label: "Full Name", required: true, type: "text", placeholder: "Enter Full Name" },
  { name: "mobileNumber", label: "Mobile Number", required: true, type: "text", placeholder: "Enter Mobile Number" },
  { name: "emailAddress", label: "Email Address", required: true, type: "email", placeholder: "Enter Email Address" },
  { name: "message", label: "Description", as: "textarea", placeholder: "Enter a Brief Description" },
];

const contactUsTransform = (data) => {
  const res = {
    ...data,
    contactDetail: {
      countryCode: "+1",
      contactNumber: data.mobileNumber
    },
  };
  return res;
};

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header />
      <Banner
        backgroundImage={contactBannerImg} title="ContactUs"
      />
      <InquiryForm
        inquiryHeading={contactUsInquiryHeading} 
        APIRoute={"contact-form"} 
        inquiryFields={contactUsInquiryFields} 
        transformFormData={contactUsTransform}
      />
      <ContactSection />
      <Resources className="pt-0" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ContactUs;

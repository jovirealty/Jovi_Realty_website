import React from 'react'
import Header from '../../components/shared/Sections/Header/header'
import Footer from '../../components/shared/Sections/Footer/footer'
import BannerTwo from '../../components/shared/Sections/BannerTwo/BannerTwo'
import IconBoxSectionThree from '../../components/shared/Sections/IconBoxSectionThree/IconBoxSectionThree'
import BoxedContentImage from '../../components/shared/Sections/BoxedContentImage/BoxedContentImage'
import SignupSteps from '../../components/shared/Sections/SignupSteps/SignupSteps'
import VideoTestimonial from '../../components/shared/Sections/VideoTestimonial/VideoTestimonial'
import FeatureCards from '../../components/shared/Sections/FeatureCards/FeatureCards' 
import ImageContentSection from '../../components/shared/Sections/ImageContentSection/ImageContentSection'
import JoviStatsSection from '../../components/shared/Sections/JoviStats/JoviStats'
import FAQ from '../../components/shared/Sections/FAQ/FAQ'
import InquiryForm from '../../components/shared/Sections/InquiryForm/InquiryForm'

import bannerImage from './../../assets/Images/services-banner.png'
import investIcon from './../../assets/Images/highlights-1.svg'
import surpriseIcon from './../../assets/Images/highlights-2.svg'
import incomeIcon from './../../assets/Images/highlights-3.svg'
import whyChooseImage from './../../assets/Images/why-choose-img.png'
import RecordImg from './../../assets/Images/record-icon.svg'
import InvestImg from './../../assets/Images/invest-icon.svg'
import ConnectedImg from './../../assets/Images/connected-icon.svg'
import FocusImg from './../../assets/Images/focus-icon.svg'
import SpeedImg from './../../assets/Images/speed-icon.svg'
import MarketingImg from './../../assets/Images/marketing-edge-bl.svg'
import agentsImg from "./../../assets/Images/meet-agents.png";



const PropertyManagement = () => {
  const benefitsItems = [
          {
              icon: investIcon,
              title: "On-Time Payments",
              description: "Get paid before the 7th of each month—guaranteed. Reliable rental income without delays or guesswork."
          },
          {
              icon: surpriseIcon,
              title: "Smart Tenant Management",
              description: "We handle tenant screening, communication, and support to reduce turnover and protect your investment."
          },
          {
              icon: incomeIcon,
              title: "Full Compliance & Maintenance",
              description: "We stay ahead of legal requirements and maintenance issues so your property stays protected and profitable."
          },
      ];
// const steps = [
//   { icon: addAddress, title: "Submit Address" },
//   { icon: addSigners, title: "Add Signers" },
//   { icon: signContract, title: "Sign Contract" },
//   { icon: getListed, title: "Get Listed" }
// ];
    const featureCardsItems = [
        {
            image: RecordImg,
            title: "Tenant Placement",
            description: "We find and screen reliable tenants for your Greater Vancouver property, ensuring a smooth leasing process."
        },
        {
            image: InvestImg,
            title: "Rent Collection",
            description: "Our team handles timely rent collection and provides detailed financial reports for transparency."
        },
        {
            image: ConnectedImg,
            title: "Property Maintenance",
            description: "We coordinate repairs and maintenance with vetted vendors to keep your property in top shape."
        },
        {
            image: FocusImg,
            title: "Lease Management",
            description: "We draft and manage leases, ensuring compliance with Greater Vancouver regulations."
        },
        {
            image: SpeedImg,
            title: "Regular Inspections",
            description: "Our bi-annual inspections ensure your property remains in excellent condition, minimizing risks."
        },
        {
            image: MarketingImg,
            title: "Tenant Communication",
            description: "We manage tenant inquiries and concerns promptly, fostering positive relationships and satisfaction."
        }
    ];
    const faqItems = [
  {
    question: "When will I receive my rental income each month?",
    answer:
      "We guarantee payment before the 7th of each month. You’ll receive your funds reliably and on time.",
  },
  {
    question: "What areas do you manage properties in?",
    answer:
      "We manage properties throughout Greater Vancouver, including Vancouver, Burnaby, Richmond, Surrey, Coquitlam, and surrounding communities.",
  },
  {
    question: "How do you screen potential tenants?",
    answer:
      "Our process includes credit checks, employment verification, landlord references, and income assessment to ensure tenant reliability.",
  },
  {
    question: "What happens if there’s a maintenance issue?",
    answer:
      "We handle all maintenance requests promptly with trusted service providers and keep you informed throughout the process.",
  },
  {
    question: "How are legal and compliance matters handled?",
    answer:
      "We stay up to date on all BC tenancy laws and ensure your property adheres to all current legal standards.",
  },
  {
    question: "Can I access financial reports and property updates?",
    answer:
      "Yes. We provide monthly reports with detailed income, expenses, and maintenance summaries—accessible anytime.",
  },
  {
    question: "Do you manage both condos and detached homes?",
    answer:
      "Absolutely. We manage a range of property types including condos, townhomes, and single-family houses.",
  },
];
  return (
    <div className='property-management'>
    <Header/>
    <BannerTwo
        backgroundImage={bannerImage}
        title="Premier Property Management in Vancouver"
        bannerText="Maximize Your Investment with Jovi Realty"
        buttonText1="Get In Touch"
        buttonLink1="/contact"
        // buttonText2="Our services"
        // buttonLink2="#"
    />
    <IconBoxSectionThree title="Seamless Solutions for Property Owners" items={benefitsItems}/>
    <BoxedContentImage
        title="Your Trusted Vancouver Property Managers"
        description="At Jovi Realty Inc., we redefine property management in Greater Vancouver with a client-first approach. Our licensed property managers deliver tailored solutions for homeowners, landlords, and investors, ensuring your rental properties in Vancouver, Burnaby, Richmond, and beyond are managed with precision. From thorough tenant screening to proactive maintenance and detailed financial reporting, we handle every detail so you can enjoy peace of mind. Available whenever you need us, our team leverages cutting-edge technology and local market expertise to maximize your property’s value and minimize vacancies. Trust Jovi Realty to be your partner in achieving stress-free, profitable property management."
        image={whyChooseImage}
        reverseOrder={true}
    />
    <SignupSteps
      title="Steps to Perfect Property Management"
      showButton={true}
      buttonText="View Enquiry"
      buttonLink="/enquiry"
      className='p-0'
    />
    <VideoTestimonial />
    <FeatureCards title= "Our Property Management Services" cards={featureCardsItems} />
    <ImageContentSection
        title="Comprehensive Support for Landlords"
        description="At Jovi Realty, we go beyond traditional property management by building lasting relationships with property owners and tenants across Greater Vancouver. Our team’s deep understanding of the local market, combined with innovative marketing and data-driven strategies, ensures your rental property stands out. Whether you own a condo in Vancouver, a townhome in Burnaby, or a commercial space in Richmond, we provide customized solutions to enhance your investment’s value. Let us handle the complexities of property management while you enjoy the rewards of ownership. Contact us today to experience the Jovi difference."
        image={agentsImg}
        useH2={true}
      />
      <JoviStatsSection/>
      <FAQ faqs={faqItems} />
      <InquiryForm />
      <Footer />

    </div>
  )
}

export default PropertyManagement
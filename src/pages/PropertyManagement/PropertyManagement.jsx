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
              title: "Invest and Rest",
              description: "We handle everything, from advertising to rent collection and repairs. Our online portal lets you check on your property any time."
          },
          {
              icon: surpriseIcon,
              title: "No Unpleasant Surprises",
              description: "From maintenance to evictions and vacancies, with our unique OneRate plan you won't need to worry about any unexpected charges."
          },
          {
              icon: incomeIcon,
              title: "Predictable, Steady Income",
              description: "Enjoy complete financial peace of mind, free from the risks, stresses and unforeseen costs of traditional property investment."
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
            title: "A Single System of Record",
            description: "One Platform to Manage Fundraising, Investor Relations and Deal & Portfolio Management"
        },
        {
            image: InvestImg,
            title: "Your Investors. Your Brand",
            description: "Build Brand Loyalty with our White Label ,Brandable Platform."
        },
        {
            image: ConnectedImg,
            title: "A Completely Connected System",
            description: "Avoiding the Pitfalls of Dis-integrated Systems with Asset Class One."
        },
        {
            image: FocusImg,
            title: "Focus on Value-added Activity",
            description: "Let Asset Class Automate and Streamline your Processes and Avoid Repetitive Manual Tasks"
        },
        {
            image: SpeedImg,
            title: "Move & Scale at Speed",
            description: "Launch & Raise Funds in Hours, Not weeks on Scalable Industrial-strength Infrastructure."
        },
        {
            image: MarketingImg,
            title: "Marketing Edge",
            description: "Unlock insights with powerful analytics and real-time data visualization."
        }
    ];
    const faqItems = [
  {
    question: "What services do you offer for real estate clients?",
    answer:
      "We provide comprehensive services. including market analysis. property valuation. tailored marketing strategies. and legal docurnentation assistance to ensure a smooth buying or selling process,",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "We provide comprehensive services. including market analysis. property valuation. tailored marketing strategies. and legal docurnentation assistance to ensure a smooth buying or selling process,",
  },
  {
    question: "How do you assist with legal documentation?",
    answer:
      "We provide comprehensive services. including market analysis. property valuation. tailored marketing strategies. and legal docurnentation assistance to ensure a smooth buying or selling process,",
  },
  {
    question: "Can you help me find the right property?",
    answer:
      "We provide comprehensive services. including market analysis. property valuation. tailored marketing strategies. and legal docurnentation assistance to ensure a smooth buying or selling process,",
  },
];
  return (
    <div className='property-management'>
    <Header/>
    <BannerTwo
        backgroundImage={bannerImage}
        title="Property Management Services"
        bannerText="Experience hassle-free property management with Jovi Realty—expert care, reliable service, and maximum returns for your real estate investment"
        buttonText1="Get In Touch"
        buttonLink1="/contact"
        // buttonText2="Our services"
        // buttonLink2="#"
    />
    <IconBoxSectionThree title="Highlights" items={benefitsItems}/>
    <BoxedContentImage
        title="Why Choose Jovi Reality"
        description="At Jovi Realty, we provide full-service property management designed to give you peace of mind and maximum returns. From tenant screening and rent collection to maintenance and legal compliance, our expert team handles every detail with professionalism and care. With a focus on optimizing your investment, we use market insights and proactive strategies to ensure your property performs at its best. Our commitment to transparency, reliability, and seamless service makes us the trusted choice for property owners who want hassle-free management and exceptional results—because your property deserves nothing less."
        image={whyChooseImage}
        reverseOrder={true}
    />
    <SignupSteps
      title="Getting started is easy, sign up in minutes"
      showButton={true}
      buttonText="View Enquiry"
      buttonLink="/enquiry"
      className='p-0'
    />
    <VideoTestimonial />
    <FeatureCards title= "Our Services" cards={featureCardsItems} />
    <ImageContentSection
        title="Who We Are"
        description="At Jovi Realty, we’ve redefined property management for landlords across Vancouver. With our focus on guaranteed on-time payments, competitive fees, and top-tier service, we ensure property ownership is both profitable and worry-free. Whether it’s a single unit or a portfolio, we treat every property with care, maximizing your returns while minimizing your workload."
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
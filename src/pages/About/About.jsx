import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/About/Banner/Banner";
import ourStoryImg from "./../../assets/Images/our-story.png";
import agentsImg from "./../../assets/Images/meet-agents.png";
import BoxedContentImage from "../../components/shared/Sections/BoxedContentImage/BoxedContentImage";
import ImageContentSection from "../../components/shared/Sections/ImageContentSection/ImageContentSection";
import ExpertiseSection from "../../components/shared/Sections/ExpertiseSection/ExpertiseSection";
import IconBoxSection from "../../components/shared/Sections/IconBoxSection/IconBoxSection";
import BuyJoinSection from "../../components/shared/Sections/BuyJoinSection/BuyJoinSection";
import VideoTestimonial from "../../components/shared/Sections/VideoTestimonial/VideoTestimonial";

import technologyIcon from "./../../assets/Images/technology-icon.png";
import marketingIcon from "./../../assets/Images/marketing-icon.png";
import businessIcon from "./../../assets/Images/business-icon.png";

const About = () => {
  const expertiseItems = [
    {
      description: "We provide tailored guidance and real-time market insights for seamless transactions."
    },
    {
      description: "Our realtors access top-tier training and innovative tools to excel."
    },
    {
      description: "From Vancouver to Richmond, we handle all property types expertly."
    },
    {
      description: "Clients and agents achieve outstanding results with our strategic approach."
    }
  ];

  const agentToolsItems = [
    {
      icon: technologyIcon,
      title: "Excellence",
      description: "Our brokerage sets the standard with innovative tools, strategic marketing, and a dedication to surpassing expectations."
    },
    {
      icon: marketingIcon,
      title: "Connection",
      description: "Rooted in Greater Vancouver, we foster strong ties with our community, helping clients and agents build their futures."
    },
    {
      icon: businessIcon,
      title: "Innovation",
      description: "We leverage cutting-edge technology and data-driven strategies to stay ahead in the ever-evolving real estate landscape."
    }
  ];

  return (
    <div className="about">
      <Header />
      <Banner />
      <BoxedContentImage
        subtitle=""
        title="Who We Are"
        description="Jovi Realty Inc. is a dynamic real estate brokerage proudly serving Greater Vancouver, from Vancouver to Burnaby, Richmond, and beyond. As a client-focused firm, we specialize in connecting buyers, sellers, property owners, and real estate agents with unparalleled support and resources. Our team combines deep market expertise with a passion for delivering exceptional service, ensuring every transaction—whether residential, commercial, pre-sales, or rentals—is seamless and successful. With innovative technology, strategic marketing, and a commitment to being there whenever you need us, Jovi Realty stands out as the brokerage of choice for navigating Greater Vancouver’s vibrant real estate market."
        image={ourStoryImg}
      />
      <ImageContentSection
        title="Empowering Your Real Estate Success"
        description="At Jovi Realty, our mission is to elevate the real estate experience for clients and agents alike. We empower buyers to find their ideal property, guide sellers to achieve maximum value, streamline property management for owners, and provide agents with industry-leading tools and training to thrive. Our advanced resources, including cutting-edge market analytics and tailored marketing strategies, ensure informed decisions and outstanding results. Available whenever you need us, our dedicated team delivers personalized support across Greater Vancouver, making us the brokerage you can trust for all your real estate needs."
        image={agentsImg}
        useH2={true}
      />
      <ExpertiseSection 
        title="Why Jovi Realty?"
        items={expertiseItems}
      />
      <IconBoxSection
        title="Our Core Values"
        items={agentToolsItems}
        showButton={false}
        className="p-0"
      />
      <VideoTestimonial />
      <BuyJoinSection />
      <Footer />
    </div>
  );
};

export default About;

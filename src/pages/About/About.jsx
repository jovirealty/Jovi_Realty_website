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
      description: "Residential & commercial buying/selling: Helping clients navigate buying and selling properties effectively."
    },
    {
      description: "Investment property advising: Providing insightful advice on profitable investment property opportunities."
    },
    {
      description: "Pre-sale & assignment sales: Expertly managing pre-sale and assignment real estate transactions."
    },
    {
      description: "Luxury real estate: Assisting with high-end properties, ensuring exceptional quality and value."
    }
  ];

  const agentToolsItems = [
    {
      icon: technologyIcon,
      title: "Technology",
      description: "Stay ahead with cutting-edge real estate tools, CRM systems, and AI-driven analytics to streamline your workflow, manage leads efficiently, and close deals faster."
    },
    {
      icon: marketingIcon,
      title: "Marketing",
      description: "Boost your brand with high-impact marketing strategies, including social media promotion, professional listing presentations, and targeted advertising to attract more clients."
    },
    {
      icon: businessIcon,
      title: "Business",
      description: "Grow your real estate business with expert coaching, personalized mentorship, and proven strategies to increase sales, build strong client relationships, and achieve long-term success."
    }
  ];

  return (
    <div className="about">
      <Header />
      <Banner />
      <BoxedContentImage
        subtitle="Empowering Your Real Estate Journey"
        title="Our Story"
        description="At Jovi Realty, real estate is more than transactions — it's about creating lasting value for every client we serve. Founded in Vancouver, we've grown to become one of the region's most trusted real estate brokerages. Whether you're buying, selling, or investing, we make the process transparent, stress-free, and rewarding. Our story is built on innovation, market expertise, and a relentless focus on helping people build their futures."
        image={ourStoryImg}
      />
      <ImageContentSection
        title="Our Brand Story"
        description="At Jovi Realty, we believe that owning property should be rewarding, not stressful. Whether you're a homeowner, investor, or landlord, our full-service property management ensures your real estate works for you—maximizing returns, minimizing hassle, and keeping tenants happy. With years of expertise in South Florida's dynamic market, we combine local insight with cutting-edge technology to handle everything—from tenant screening and rent collection to maintenance and legal compliance. Our transparent, proactive approach means you enjoy passive income without the headaches, while tenants experience seamless living."
        image={agentsImg}
        useH2={true}
      />
      <ExpertiseSection 
        title="Comprehensive Real Estate Expertise"
        items={expertiseItems}
      />
      <IconBoxSection
        title="Agent Tools & Resources"
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

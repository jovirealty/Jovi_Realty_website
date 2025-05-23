import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import FeaturedProperties from "../../components/Home/FeaturedProperties/FeaturedProperties";
import ImageContentSection from "../../components/shared/Sections/ImageContentSection/ImageContentSection";
import About from "../../components/shared/Sections/AboutSection/AboutSection";
import Banner from "../../components/Home/Banner/Banner";
import FeatureCards from "../../components/shared/Sections/FeatureCards/FeatureCards";
import Resources from "../../components/shared/Sections/Resources/Resources";
import Testimonials from "../../components/shared/Sections/Testimonials/Testimonials";
import FAQ from "../../components/shared/Sections/FAQ/FAQ";
import KeywordSearch from "../../components/shared/Sections/KeywordSearch/KeywordSearch";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";

import buySmartImg from "./../../assets/Images/buy-smart.svg";
import sellFastImg from "./../../assets/Images/sell-fast.svg";
import managedRightImg from "./../../assets/Images/managed-right.svg";
import agentGrowthImg from "./../../assets/Images/agent-growth.svg";
import localExpertImg from "./../../assets/Images/local-expert.svg";
import marketingEdgeImg from "./../../assets/Images/marketing-edge.svg";
import meetAgentsImg from "./../../assets/Images/meet-agents.png";

const homeHighlights = [
  {
    image: buySmartImg,
    title: "Buy Smart",
    description:
      "Make informed property investments with expert guidance and market insights",
  },
  {
    image: sellFastImg,
    title: "Sell Fast",
    description:
      "Get the best deals and sell your property quickly, hassle-free",
  },
  {
    image: managedRightImg,
    title: "Managed Right",
    description:
      "Expertly handled investments ensuring growth, security, and long-term success",
  },
  {
    image: agentGrowthImg,
    title: "Agent Growth",
    description:
      "Empowering agents with tools, training, and strategies for success",
  },
  {
    image: localExpertImg,
    title: "Local Expert",
    description:
      "Providing trusted guidance and insights for smart local property investments",
  },
  {
    image: marketingEdgeImg,
    title: "Marketing Edge",
    description:
      "Boost visibility, drive engagement, and maximize growth with strategic marketing",
  },
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

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <FeaturedProperties />
      <ImageContentSection
        title="Meet Our Expert Agents"
        description="Our team of experienced agents is here to help you navigate the market with ease."
        image={meetAgentsImg}
        buttonText="Find Your Agent"
        buttonLink="/find-an-agent"
      />
      <About />
      <FeatureCards title="Highlights" cards={homeHighlights} />
      <Resources />
      <Testimonials className="p-0" />
      <FAQ className="pb-0" faqs={faqItems} />
      <KeywordSearch />
      <InquiryForm />
      <Footer />
    </div>
  );
}
export default Home;

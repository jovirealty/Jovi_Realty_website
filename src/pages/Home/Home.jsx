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
    title: "Regional Expertise",
    description:
      "Serving all of Greater Vancouver with detailed knowledge of each city's housing and investment landscape.",
  },
  {
    image: sellFastImg,
    title: "Comprehensive Services",
    description:
      "Providing real estate sales, rentals, property management, and brokerage support—all within a single trusted firm.",
  },
  {
    image: managedRightImg,
    title: "Responsive Communication",
    description:
      "Timely, transparent updates and direct support throughout every stage of your real estate journey.",
  },
  {
    image: agentGrowthImg,
    title: "Streamlined Technology",
    description:
      "Utilizing reliable tools to simplify listings, communication, and transaction management across all service areas.",
  },
  {
    image: localExpertImg,
    title: "Process Transparency",
    description:
      "Clear guidance at every step, ensuring clients understand decisions, timelines, and expected outcomes.",
  },
  {
    image: marketingEdgeImg,
    title: "Experienced Professionals",
    description:
      "Skilled, knowledgeable agents committed to high standards of service, accuracy, and ethical representation.",
  },
];

const faqItems = [
  {
    question: "What support does Jovi Realty provide to its agents?",
    answer:
      "Jovi Realty offers comprehensive support, including mentorship programs, marketing resources, lead generation tools, and administrative assistance to help agents succeed in their careers.",
  },
  {
    question: "Can I maintain my personal branding while working with Jovi Realty?",
    answer:
      "Absolutely. We encourage agents to develop and maintain their personal brand, providing the flexibility to market themselves effectively while benefiting from our brokerage's resources.",
  },
  {
    question: "What training opportunities are available for agents?",
    answer:
      "We provide ongoing training sessions, workshops, and access to industry-leading tools to ensure our agents stay updated with market trends and best practices.",
  },
  {
    question: "How does Jovi Realty assist with lead generation?",
    answer:
      "Our brokerage invests in marketing strategies and platforms that generate quality leads, which are then distributed to our agents to help grow their client base.",
  },
];

const indexInquiry = {
  title: "Have a Question or Ready to Chat?",
  subTitle: "Let us know how we can help—buying, selling, managing, or just exploring your options.",
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <FeaturedProperties />
      <ImageContentSection
        title="People Make the Difference – Meet Our Agents"
        description="Behind every property is a person with a goal. And behind every successful transaction is a real estate agent who cares. Our agents aren't just professionals—they’re locals who live and breathe Greater Vancouver real estate, and they’re ready to help you move forward."
        image={meetAgentsImg}
        buttonText="Meet the Team"
        buttonLink="/find-an-agent"
      />
      <About />
      <FeatureCards title="What Sets Jovi Realty Apart" cards={homeHighlights} />
      <Resources />
      <Testimonials className="p-0" />
      <FAQ className="pb-0" faqs={faqItems} />
      <KeywordSearch />
      <InquiryForm inquiry={indexInquiry} APIRoute={"homepage"} />
      <Footer />
    </div>
  );
}
export default Home;

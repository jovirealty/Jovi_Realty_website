import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import BannerTwo from "../../components/shared/Sections/BannerTwo/BannerTwo";
import IconBoxSectionTwo from "../../components/shared/Sections/IconBoxSectionTwo/IconBoxSectionTwo";
import About from "../../components/shared/Sections/AboutSection/AboutSection";
import ExpertiseSection from "../../components/shared/Sections/ExpertiseSection/ExpertiseSection";
import VideoTestimonial from "../../components/shared/Sections/VideoTestimonial/VideoTestimonial";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import BuyJoinSection from "../../components/shared/Sections/BuyJoinSection/BuyJoinSection";
import AgentsSection from "../../components/shared/Sections/AgentsSection/AgentsSection";
import IconBoxSection from "../../components/shared/Sections/IconBoxSection/IconBoxSection";
import FAQ from "../../components/shared/Sections/FAQ/FAQ";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";

import bannerImage from "./../../assets/Images/sell-banner.png";
import expertIcon from "./../../assets/Images/expert-icon.svg";
import premiumIcon from "./../../assets/Images/premium-icon.svg";
import profIcon from "./../../assets/Images/prof-icon.svg";
import dedicateIcon from "./../../assets/Images/dedicate-icon.svg";
import homeIcon from "./../../assets/Images/home-icon.png";
import cameraIcon from "./../../assets/Images/camera-icon.png";
import formIcon from "./../../assets/Images/form-icon.png";

const SellYourProperty = () => {
  const benefitsItems = [
    {
      icon: expertIcon,
      title: "Expert Pricing Strategy",
      description: "We help you set the perfect price to attract serious buyers and maximize your return"
    },
    {
      icon: premiumIcon,
      title: "Premium Marketing Exposure",
      description: "Your property gets featured on top real estate platforms, social media, and exclusive buyer networks"
    },
    {
      icon: profIcon,
      title: "Professional Staging Advice",
      description: "Enhance your home's appeal with proven staging tips that make a lasting impression."
    },
    {
      icon: dedicateIcon,
      title: "Dedicated Agent Support",
      description: "Work one-on-one with a skilled agent who handles negotiations, showings, and every detail in between."
    }
  ];
  const workItems = [
    {
      description: <p>Get a professional assessment of your home's market value.</p>
    },
    {
      description: <p>We list your property and promote it to attract serious buyers.</p>
    },
    {
      description: <p>We manage viewings and negotiate the best offers on your behalf.</p>
    },
    {
      description: <p>From paperwork to handover, we guide you through a smooth closing</p>
    }
  ];

  const agentToolsItems = [
    {
      icon: homeIcon,
      title: "Free Home Valuation",
      description: "Stay ahead with cutting-edge real estate tools, CRM systems, and AI-driven analytics to streamline your workflow, manage leads efficiently, and close deals faster."
    },
    {
      icon: cameraIcon,
      title: "Professional Photography & Virtual Tours",
      description: "Boost your brand with high-impact marketing strategies, including social media promotion, professional listing presentations, and targeted advertising to attract more clients."
    },
    {
      icon: formIcon,
      title: "Home Prep Guidance",
      description: "Grow your real estate business with expert coaching, personalized mentorship, and proven strategies to increase sales, build strong client relationships, and achieve long-term success."
    }
  ];

  const faqItems = [
    {
      question: "What services do you offer for real estate clients?",
      answer:
        "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.",
    },
    {
      question: "How do you assist with legal documentation?",
      answer:
        "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.",
    },
    {
      question: "Can you help me find the right property?",
      answer:
        "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.",
    },
  ];

  return (
    <div className="sell-your-property">
      <Header />
      <BannerTwo
        backgroundImage={bannerImage}
        title="Sell Your Property"
        bannerText="Ready to make your move? List your property with Jovi Realty and experience a seamless, professional selling journey. From expert pricing to closing the deal, we're with you every step of the way. Let's get your home sold — faster and smarter"
        buttonText1="Get In Touch"
        buttonLink1="/contact"
      />
      <IconBoxSectionTwo title="Key Benefits of Selling with Our Brokerage" items={benefitsItems} />
      <About />
      <ExpertiseSection
        title="How It Works"
        items={workItems}
      />
      <VideoTestimonial className="p-0" />
      <PropertyGrid title="Recently Sold Properties" statusFilter="For Sale" totalItems={4} />
      <BuyJoinSection />
      <AgentsSection showSearch={false} title="Meet Our Agents" totalItems={4} />
      <IconBoxSection
        className="p-0"
        title="What's Included When You List With Us"
        items={agentToolsItems}
        showButton={true}
        buttonLink="#"
        buttonText="View More"
      />
      <FAQ faqs={faqItems} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SellYourProperty;
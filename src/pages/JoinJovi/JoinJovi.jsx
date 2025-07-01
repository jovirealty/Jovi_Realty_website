import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import BannerTwo from "../../components/shared/Sections/BannerTwo/BannerTwo";
import IconBoxSectionTwo from "../../components/shared/Sections/IconBoxSectionTwo/IconBoxSectionTwo";
import BoxedContentImage from "../../components/shared/Sections/BoxedContentImage/BoxedContentImage";
import VideoTestimonial from "../../components/shared/Sections/VideoTestimonial/VideoTestimonial";
import FeatureCards from "../../components/shared/Sections/FeatureCards/FeatureCards";
import AboutSectionTwo from "../../components/shared/Sections/AboutSectionTwo/AboutSectionTwo";
import IconBoxSection from "../../components/shared/Sections/IconBoxSection/IconBoxSection";
import FAQTwo from "../../components/shared/Sections/FAQTwo/FAQTwo";
import InquiryFormTwo from "../../components/shared/Sections/InquiryFormTwo/InquiryFormTwo";

import bannerImage from "../../assets/Images/join-banner.png";
import compIcon from "../../assets/Images/comp-icon.svg";
import supportIcon from "../../assets/Images/support-icon.svg";
import listIcon from "../../assets/Images/list-icon.svg";
import doorIcon from "../../assets/Images/door-icon.svg";
import whyChooseImage from "../../assets/Images/why-choose-img.png";
import buySmartImg from "./../../assets/Images/buy-smart.svg";
import sellFastImg from "./../../assets/Images/sell-fast.svg";
import managedRightImg from "./../../assets/Images/managed-right.svg";
import agentGrowthImg from "./../../assets/Images/agent-growth.svg";
import localExpertImg from "./../../assets/Images/local-expert.svg";
import marketingEdgeImg from "./../../assets/Images/marketing-edge.svg";
import technologyIcon from "./../../assets/Images/technology-icon.png";
import marketingIcon from "./../../assets/Images/marketing-icon.png";
import businessIcon from "./../../assets/Images/business-icon.png";
const JoinJovi = () => {
    const benefitsItems = [
        {
            icon: compIcon,
            title: "Competitive Commission Structures",
            description: "Maximize your earnings with industry-leading, transparent commission plans tailored for high performers."
        },
        {
            icon: supportIcon,
            title: "Unmatched Support & Resources",
            description: "Access dedicated onboarding, marketing tools, and 24/7 back-office support to help you close deals faster."
        },
        {
            icon: listIcon,
            title: "Premium Listings & Lead Generation",
            description: "Boost your portfolio with high-value listings and qualified leads delivered directly to you."
        },
        {
            icon: doorIcon,
            title: "Reputation That Opens Doors",
            description: "Join a respected brand that enhances your credibility and makes client acquisition smoother."
        }
    ];
    const featureCardsItems = [
        {
            image: buySmartImg,
            title: "Competitive Commission Splits",
            description: "Earn more with our industry-leading commission structures designed to reward your hard work and success."
        },
        {
            image: sellFastImg,
            title: "Unmatched Support, Anytime",
            description: "From onboarding to ongoing support, we're here—no question unanswered, anytime you need."
        },
        {
            image: managedRightImg,
            title: "Personalized Training",
            description: "Develop your skills with hands-on training, expert coaching, and a clear roadmap for success."
        },
        {
            image: agentGrowthImg,
            title: "Advanced Real Estate Tools",
            description: "Outpace competitors with next-gen CRM and marketing tools that streamline daily workflows."
        },
        {
            image: localExpertImg,
            title: "Custom Agent Websites",
            description: "Elevate your brand—capture leads and highlight excellence with a tailored, professional website."
        },
        {
            image: marketingEdgeImg,
            title: "Flexible Management Plans",
            description: "Tailored services for your property—maximize returns and enjoy hassle-free ownership."
        }
    ];
    const futureItems = [
        {
            icon: technologyIcon,
            title: "Onboarding & Mentorship",
            description: "Start with confidence, guided by a mentor who knows how to help you achieve your unique goals."
        },
        {
            icon: marketingIcon,
            title: "Professional Development",
            description: "Access in-depth training programs and certifications to elevate your expertise at every level."
        },
        {
            icon: businessIcon,
            title: "Streamlined Transaction Management",
            description: "Streamline your workflow with templates that simplify contracts, offers, and closings effortlessly."
        }
    ];
    const faqs = [
        {
            question: "What support do you provide for new agents?",
            answer: "Joining Jovi Realty offers numerous benefits, including competitive commission structures, unmatched support and resources, premium listings and lead generation, and a reputation that opens doors. We also provide personalized training, professional development, and streamlined transaction management to help you succeed in the real estate industry."
        },
        {
            question: "How does Jovi Realty differ from other brokerages?",
            answer: "Joining Jovi Realty offers numerous benefits, including competitive commission structures, unmatched support and resources, premium listings and lead generation, and a reputation that opens doors. We also provide personalized training, professional development, and streamlined transaction management to help you succeed in the real estate industry."
        },
        {
            question: "What kind of leads and tools will I have access to?",
            answer: "Joining Jovi Realty offers numerous benefits, including competitive commission structures, unmatched support and resources, premium listings and lead generation, and a reputation that opens doors. We also provide personalized training, professional development, and streamlined transaction management to help you succeed in the real estate industry."
        },
        {
            question: "How does Jovi Realty ensure my rental property stays profitable?",
            answer: "Joining Jovi Realty offers numerous benefits, including competitive commission structures, unmatched support and resources, premium listings and lead generation, and a reputation that opens doors. We also provide personalized training, professional development, and streamlined transaction management to help you succeed in the real estate industry."
        }
    ];
    return (
        <div className="join-jovi">
            <Header />
            <BannerTwo
                backgroundImage={bannerImage}
                title="Join Jovi Realty"
                bannerText="Join Jovi Realty and grow with a dynamic, supportive team. Unlock your potential with expert guidance, innovative tools, and endless opportunities in real estate success"
                buttonText1="Get In Touch"
                buttonLink1="/contact"
                buttonText2="Our services"
                buttonLink2="/property-management"
            />
            <IconBoxSectionTwo title="Why Join Jovi Realty?" items={benefitsItems} />
            <BoxedContentImage
                title="Why Choose Jovi Reality"
                description="At Jovi Realty, we provide full-service property management designed to give you peace of mind and maximum returns. From tenant screening and rent collection to maintenance and legal compliance, our expert team handles every detail with professionalism and care. With a focus on optimizing your investment, we use market insights and proactive strategies to ensure your property performs at its best. Our commitment to transparency, reliability, and seamless service makes us the trusted choice for property owners who want hassle-free management and exceptional results—because your property deserves nothing less."
                image={whyChooseImage}
                reverseOrder={true}
            />
            <VideoTestimonial className="pt-0" />
            <FeatureCards title="Discover What Sets Jovi Realty Apart" cards={featureCardsItems} />
            <AboutSectionTwo />
            <IconBoxSection
                title="Your Future is Bright at Jovi Realty"
                items={futureItems}
                showButton={true}
                buttonText="Get a Free Consultation"
                buttonLink="/contact"
                className="p-0"
            />
            <FAQTwo faqs={faqs} />
            <InquiryFormTwo />
            <Footer />
        </div>
    );
};

export default JoinJovi;
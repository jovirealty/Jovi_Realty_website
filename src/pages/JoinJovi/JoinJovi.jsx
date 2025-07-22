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
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";

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
            title: "Quality Leads & Real Opportunity",
            description: "We don’t make empty promises. Get access to serious leads, referrals, and a pipeline that helps you close more, faster."
        },
        {
            icon: supportIcon,
            title: "Real Support, Not Just Access",
            description: "From deal coordination to marketing and training—we’re hands-on, not hands-off. You’ll never be left figuring it out alone."
        },
        {
            icon: listIcon,
            title: "Custom Website with CRM & Automation",
            description: "Boost your portfolio with high-value listings and qualified leads delivered directly to you."
        },
        {
            icon: doorIcon,
            title: "Flexible Commission Structure",
            description: "Choose a plan that fits your business goals—including options to keep 100% of your commission earned."
        }
    ];

    const featureCardsItems = [
        {
            image: buySmartImg,
            title: "Targeted Lead Systems",
            description: "We don’t hand out generic leads. We generate high-quality buyer and seller opportunities based on your market focus."
        },
        {
            image: sellFastImg,
            title: "Personal Brand Development",
            description: "Go beyond a logo—build a full identity. From listing visuals to agent promos, we’ll help you stand out."
        },
        {
            image: managedRightImg,
            title: "Deal & Compliance Coordination",
            description: "Let our team handle backend logistics—from paperwork and deadlines to license compliance and broker sign-offs."
        },
        {
            image: agentGrowthImg,
            title: "Marketing Strategy & Execution",
            description: "From digital ads to print campaigns, we give you tactical help—not just templates or suggestions."
        },
        {
            image: localExpertImg,
            title: "Community + Culture",
            description: "We’ve built a culture where agents share wins, learn together, and actually know who they’re working with."
        },
        {
            image: marketingEdgeImg,
            title: "In-Market Training & Peer Learning",
            description: "Practical, ongoing workshops that reflect real trends in your market—not just theory or canned modules."
        }
    ];

    const futureItems = [
        {
            icon: technologyIcon,
            title: "Agent Voice",
            description: "We listen, adapt, and involve our agents in decisions that shape the way we operate."
        },
        {
            icon: marketingIcon,
            title: "Leadership Access",
            description: "Get direct access to decision-makers, mentors, and support—without layers of red tape."
        },
        {
            icon: businessIcon,
            title: "Professional Growth",
            description: "Beyond transactions—we help agents evolve into well-rounded, long-term industry professionals."
        }
    ];

    const faqs = [
        {
            question: "How quickly can I onboard and start transacting?",
            answer: "Our onboarding process is streamlined—you can be fully set up, trained, and ready within a few business days."
        },
        {
            question: "Will I have access to office space or can I work remotely?",
            answer: "We offer both: physical office space when needed and full tools for agents who prefer a mobile workflow."
        },
        {
            question: "Is there a mentorship program for new agents?",
            answer: "Yes, we offer one-on-one mentorship to help new agents ramp up confidently and close deals sooner."
        },
        {
            question: "Can I bring my own brand or team to Jovi?",
            answer: "Absolutely. We support agent branding and offer flexible models for individuals, teams, and partnerships."
        }
    ];

    const joinJoviInquiryHeadings = {
        title: "Have a Question or Ready to Chat?",
        subTitle: "Let us know how we can help—buying, selling, managing, or just exploring your options.",
    };

    const joinJoviInquiryFields = [
        { name: "fullName", label: "Full Name", required: true, type: "text", placeholder: "Enter Full Name" },
        { name: "mobileNumber", label: "Mobile Number", required: true, type: "text", placeholder: "Enter Mobile Number" },
        { name: "emailAddress", label: "Email Address", required: true, type: "email", placeholder: "Enter Email Address" },
        { name: "licenceStatus", label: "licence Status", as: "select", required: true, options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
            { value: "In Progress", label: "In Progress" },
            ]
        },
        { name: "message", label: "Description", as: "textarea", placeholder: "Enter a Brief Description" },
    ];

    const joinJoviTransform = (data) => {
        const res = {
            ...data,
            contactDetail: {
                countryCode: "+1",
                contactNumber: data.mobileNumber
            },
        };
        return res;
    };

    return (
        <div className="join-jovi">
            <Header />
            <BannerTwo
                backgroundImage={bannerImage}
                title="Your Brokerage Partner in Real Estate Success"
                bannerText="Join a brokerage that prioritizes your growth, offering unparalleled support, advanced tools, and a collaborative environment to help you thrive in Greater Vancouver's dynamic real estate market."
                buttonText1="Get In Touch"
                buttonLink1="/contact"
                buttonText2="Our services"
                buttonLink2="/property-management"
            />
            <IconBoxSectionTwo title="Not Perks—Just the Right Way to Operate" items={benefitsItems} />
            <BoxedContentImage
                title="Why Join Jovi Realty"
                description={`
                At Jovi Realty, we’ve created a brokerage that puts agents first—through structure, support, and real opportunity. You won’t find micromanagement here, but you will find systems that work, tools that make your job easier, and a leadership team that’s actually available when you need them.
                
                We offer more than just leads or software—we offer a platform where agents can grow sustainable businesses. With consistent deal support, marketing help, and access to ongoing training, you can focus on what matters most: building relationships and closing deals.`}
                image={whyChooseImage}
                reverseOrder={true}
            />
            <VideoTestimonial className="pt-0" />
            <FeatureCards title="Empowering Agents with Comprehensive Support" cards={featureCardsItems} />
            <AboutSectionTwo />
            <IconBoxSection
                title="What Sets Our Culture Apart"
                items={futureItems}
                showButton={true}
                buttonText="Get a Free Consultation"
                buttonLink="/contact"
                className="p-0"
            />
            <FAQTwo faqs={faqs} />
            <InquiryForm 
                inquiryHeading={joinJoviInquiryHeadings} 
                APIRoute={"join-jovi"} 
                inquiryFields={joinJoviInquiryFields} 
                transformFormData={joinJoviTransform}
            />
            {/* <InquiryFormTwo /> */}
            <Footer />
        </div>
    );
};

export default JoinJovi;
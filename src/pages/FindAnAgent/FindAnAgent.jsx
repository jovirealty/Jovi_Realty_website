import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import AgentsSection from "../../components/shared/Sections/AgentsSection/AgentsSection";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";

import agentBannerImg from './../../assets/Images/agent-banner.png';

const FindAnAgent = () => {
    return (
        <div className="find-an-agent">
            <Header />
            <Banner
                backgroundImage={agentBannerImg}
                title="Find an Agent"
            />
            <AgentsSection showSearch={true} title="Featured Agents" subHead="Our Team" />
            <InquiryForm />
            <Footer />
        </div>
    );
};

export default FindAnAgent;
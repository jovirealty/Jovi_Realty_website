import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import AgentDetails from "../../components/shared/Sections/AgentDetails/AgentDetails";
import AgentTabs from "../../components/AgentProfile/AgentTabs/AgentTabs";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";

import agentInnerBanner from './../../assets/Images/agent-inn-banner.png';

const AgentProfiles = () => {
    return (
        <div>
            <Header />
            <Banner
                backgroundImage={agentInnerBanner}
            />
            <AgentDetails />
            <AgentTabs />
            <InquiryForm />         
            <Footer />
        </div>
    );
};

export default AgentProfiles;

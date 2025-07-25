import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useBridgeApi from "../../hooks/useBridgeApi";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import AgentDetails from "../../components/shared/Sections/AgentDetails/AgentDetails";
import AgentTabs from "../../components/AgentProfile/AgentTabs/AgentTabs";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";

import agentInnerBanner from './../../assets/Images/agent-inn-banner.png';

const AgentProfiles = () => {
    const { MemberKey } = useParams();
    const [memberData, setMemberData] = useState(null);

    const { data, loading, error } = useBridgeApi(
        `/Member(${MemberKey})`,
        {},
        false
    );

    useEffect(() => {
        if(data) {
            setMemberData(data);
        }
    }, [data]);
    return (
        <div>
            <Header />
            <Banner
                backgroundImage={agentInnerBanner}
            />
            {loading && <div className="text-center my-5">Loading agent details...</div>}
            {error && <div className="text-center text-danger my-5">Error loading agent details.</div>}
            {memberData && (
                <>
                    <AgentDetails agent={memberData} />
                    <AgentTabs agent={memberData} />
                </>
            )}
            <Footer />
        </div>
    );
};

export default AgentProfiles;

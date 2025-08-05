import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useBridgeApi from "../../hooks/useBridgeApi";
import useApis from "../../hooks/useApis";

import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import AgentDetails from "../../components/shared/Sections/AgentDetails/AgentDetails";
import AgentTabs from "../../components/AgentProfile/AgentTabs/AgentTabs";
import InquiryForm from "../../components/shared/Sections/InquiryForm/InquiryForm";
import AgentTabsSkeleton from "../../components/Skeletons/AgentsPageSkeleton/AgentProfileSkeleton/AgentTabsSkeleton";
import AgentDetailsSkeleton from "../../components/Skeletons/AgentsPageSkeleton/AgentProfileSkeleton/AgentDetialSkeleton";

import agentInnerBanner from './../../assets/Images/agent-inn-banner.png';

const AgentProfiles = () => {
    const { MemberKey } = useParams();
    const [memberData, setMemberData] = useState(null);
    const [agentData, setAgentData] = useState(null);
    // console.log("member data: ", memberData)

    const { data, loading, error } = useApis(
    `/agents/${MemberKey}`,
    { lazy: false }
  );
//   console.log("agent section data: ", data?.agent)

  
    useEffect(() => {
        if(data) {
            setAgentData(data);
            setMemberData(data);
        }
    }, [data]);

    return (
        <div>
            <Header />
            <Banner
                backgroundImage={agentInnerBanner}
            />
            {loading && (
                <div className="text-center my-5">
                    <AgentDetailsSkeleton />
                    < AgentTabsSkeleton />
                </div>
            )}
            {error && <div className="text-center text-danger my-5">Error loading agent details.</div>}
            {memberData && (
                <>
                    <AgentDetails agent={memberData} agentData={agentData} />
                    <AgentTabs agent={memberData} agentData={agentData} />
                </>
            )}
            <Footer />
        </div>
    );
};

export default AgentProfiles;

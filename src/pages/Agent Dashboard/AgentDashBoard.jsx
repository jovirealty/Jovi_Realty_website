import React from 'react'
import Header from '../../components/shared/Sections/Header/header'
import Footer from '../../components/shared/Sections/Footer/footer';
import AgentDashboardSection from '../../components/Agent Dashboard/AgentDashboardSection';
import InquiryForm from '../../components/shared/Sections/InquiryForm/InquiryForm';

import Dashboard1 from './../../assets/Images/agent-dashboard-1.png'
import enq1 from './../../assets/Images/enq-1.png'
import enq2 from './../../assets/Images/enq-2.png'
import enq3 from './../../assets/Images/enq-3.png'
import john from './../../assets/Images/john.png'
import Dashboard2 from './../../assets/Images/agent-dashboard-2.png'
import enq4 from './../../assets/Images/enq-4.png'
import enq5 from './../../assets/Images/enq-5.png'
import enq6 from './../../assets/Images/enq-6.png'
import travis from './../../assets/Images/travis.png'



const AgentDashBoard = () => {
    const enquiryData = [
        {
            orderId: '8924',
            date: '27 March 2025',
            title: 'Harborfront Condos',
            price: '$600,000',
            address: 'Harborfront Condos',
            bedrooms: 3,
            bathrooms: 2,
            area: '3000',
            images: [enq3, enq2, enq1],
            user: {
                name: 'John Smith',
                email: 'johnsmith@gmail.com',
                phone: '000-000-0000',
                avatar: john,
            },
            mainImage: Dashboard1,
        },
        {
            orderId: '8457',
            date: '27 March 2025',
            title: '111 7133 14th Avenue',
            price: '$829,000',
            address: 'Burnaby East, Edmonds BE',
            bedrooms: 2,
            bathrooms: 2,
            area: '3000',
            images: [enq4, enq5, enq6],
            user: {
                name: 'Travis Head',
                email: 'travishead@gmail.com',
                phone: '000-000-0000',
                avatar: travis,
            },
            mainImage: Dashboard2,
        },
    ];
    return (
        <div>
            <Header />
            <AgentDashboardSection enquiryData={enquiryData} />
            <InquiryForm />
            <Footer />
        </div>
    )
}

export default AgentDashBoard
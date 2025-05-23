import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import NewsSection from "../../components/shared/Sections/NewsSection/NewsSection";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import newsBannerImg from './../../assets/Images/news-banner.png';

const NewsAndResources = () => {
    return (
        <div className="news-and-resources">
            <Header />
            <Banner
                backgroundImage={newsBannerImg}
                title="News & Resources"
            />
            <NewsSection postsPerPage={12}/>
            <CTASection />
            <Footer />
        </div>
    );
};

export default NewsAndResources;

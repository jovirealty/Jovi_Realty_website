import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import ContentSection from "../../components/shared/Sections/ContentSection/ContentSection";
import termsBannerImg from './../../assets/Images/terms-banner.png';

const termsContent = (
  <>
    <h2>1. Acceptance of Terms</h2>
    <p>
      By using our website, you acknowledge that you have read, understood, and
      agreed to these Terms and Conditions. If you do not agree, please refrain
      from using our services.
    </p>
    <h2>2. Services Provided</h2>
    <p>
      Jovi Realty offers real estate services, including property listings,
      consultations, investment advice, and property management solutions. We
      reserve the right to modify or discontinue any service without prior
      notice.
    </p>
    <h2>3. User Responsibilities</h2>
    <ul>
      <li>
        You agree to provide accurate and up-to-date information when using our
        services.
      </li>
      <li>
        You must not engage in any illegal, fraudulent, or unauthorized
        activities on our platform.
      </li>
      <li>
        You are responsible for maintaining the confidentiality of your account
        and login details.
      </li>
    </ul>
    <h2>4. Property Listings & Accuracy</h2>
    <p>
      We strive to provide accurate property listings and information. However,
      Jovi Realty does not guarantee the completeness, accuracy, or reliability
      of any property details. Prices, availability, and property features are
      subject to change without notice.
    </p>
    <h2>5. Intellectual Property</h2>
    <p>
      All content on this website, including text, images, logos, and designs,
      is the property of Jovi Realty and protected under copyright laws.
      Unauthorized use, reproduction, or distribution is strictly prohibited.
    </p>
    <h2>6. Limitation of Liability</h2>
    <p>
      Jovi Realty is not responsible for any direct or indirect losses, damages,
      or legal claims arising from the use of our website or services. We do not
      guarantee uninterrupted access or error-free service.
    </p>
    <h2>7. Third-Party Links</h2>
    <p>
      Our website may contain links to third-party websites for additional
      resources. We do not endorse or take responsibility for the content,
      policies, or practices of external sites.
    </p>
    <h2>8. Modifications to Terms</h2>
    <p>
      Jovi Realty reserves the right to update or modify these Terms and
      Conditions at any time. Continued use of our website after changes have
      been posted constitutes your acceptance of the revised terms.
    </p>
  </>
);

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <Header />
      <Banner backgroundImage={termsBannerImg} title="Terms and Conditions" />
      <ContentSection content={termsContent} />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
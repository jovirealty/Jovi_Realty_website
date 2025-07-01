import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import ContentSection from "../../components/shared/Sections/ContentSection/ContentSection";
import privacyBannerImg from './../../assets/Images/privacy-banner.png';

const privacyContent = (
  <>
    <h2>1. Information We Collect</h2>
    <p>We may collect the following types of information:</p>
    <ul>
      <li>
        {" "}
        Personal Information – Name, email address, phone number, and any
        details you provide when contacting us or using our services.
      </li>
      <li>
        Property Details – Information related to property listings,
        preferences, or inquiries.
      </li>
      <li>
        Website Usage Data – IP address, browser type, and browsing behavior to
        improve our website experience.{" "}
      </li>
    </ul>
    <h2>2. How We Use Your Information</h2>
    <p>We use your information to:</p>
    <ul>
      <li>Provide and improve our real estate services.</li>
      <li>Respond to inquiries and communicate with you.</li>
      <li>
        Send updates, promotional offers, or newsletters (you can opt out
        anytime).
      </li>
      <li>Analyze website traffic and user behavior for better service.</li>
      <li>Comply with legal and regulatory obligations.</li>
    </ul>
    <h2>3. Data Protection & Security</h2>
    <p>
      We take strict security measures to protect your personal data from
      unauthorized access, misuse, or disclosure. However, no method of online
      transmission is 100% secure, and we encourage users to take precautions
      when sharing information online.
    </p>
    <h2>4. Sharing Your Information</h2>
    <p>
      We do not sell or rent your personal information. However, we may share it
      with:
    </p>
    <ul>
      <li>
        Trusted third-party partners – such as mortgage brokers or legal
        advisors, for transaction assistance.
      </li>
      <li>
        Service providers – who help us with website maintenance, marketing, or
        data analytics.
      </li>
      <li>Legal authorities – if required by law or to protect our rights.</li>
    </ul>
    <h2>5. Cookies & Tracking Technologies</h2>
    <p>
      Our website may use cookies and tracking tools to enhance user experience
      and analyze web traffic. You can manage cookie preferences in your browser
      settings.
    </p>
    <h2>6. Third-Party Links</h2>
    <p>
      Our website may contain links to third-party websites. We are not
      responsible for their privacy policies or practices, and we encourage
      users to review them before sharing any information.
    </p>
    <h2>7. Your Privacy Rights</h2>
    <p>You have the right to:</p>
    <ul>
      <li>Access, update, or delete your personal data.</li>
      <li>Opt out of marketing communications.</li>
      <li>Request details on how your data is being used.</li>
      <p>To exercise your rights, please contact us at the details below.</p>
    </ul>
  </>
);

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Header />
      <Banner backgroundImage={privacyBannerImg} title="Privacy Policy" />
      <ContentSection content={privacyContent} />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
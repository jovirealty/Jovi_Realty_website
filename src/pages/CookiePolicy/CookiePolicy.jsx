import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import ContentSection from "../../components/shared/Sections/ContentSection/ContentSection";
import cookieBannerImg from './../../assets/Images/cookie-banner.png';

const cookieContent = (
  <>
    <h2>1. What Are Cookies</h2>
    <p>
      Cookies are small text files stored on your device when you visit a
      website. They help improve functionality, analyze traffic, and personalize
      your experience.
    </p>
    <h2>2. How We Use Cookies</h2>
    <p>Jovi Realty uses cookies to:</p>
    <ul>
      <li>Ensure our website functions properly.</li>
      <li>Remember user preferences and settings.</li>
      <li>Analyze website traffic and performance.</li>
      <li>Improve marketing efforts and personalized content.</li>
    </ul>
    <h2>3. Types of Cookies We Use</h2>
    <p>
      Essential Cookies - Required for website functionality and security.
      <br />
      Analytical Cookies - Help us understand user behavior and improve our
      website.
      <br />
      Marketing Cookies – Used to deliver relevant real estate promotions and
      advertisements.
      <br />
      Functional Cookies – Store preferences to enhance user experience.
    </p>
    <h2>4. Managing Your Cookie Preferences</h2>
    <p>
      You can control or disable cookies through your browser settings. However,
      restricting cookies may affect certain website features and
      functionalities.
    </p>
    <h2>5. Third-Party Cookies</h2>
    <p>
      We may use third-party services (e.g., Google Analytics) that set their
      own cookies to analyze website traffic and user engagement. These third
      parties have their own privacy policies.
    </p>
    <h2>6. Updates to This Policy</h2>
    <p>
      Jovi Realty may update this Cookie Policy from time to time. Any changes
      will be posted on this page with an updated effective date.
    </p>
  </>
);

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <Header />
      <Banner backgroundImage={cookieBannerImg} title="Cookie Policy" />
      <ContentSection content={cookieContent} />
      <Footer />
    </div>
  );
};

export default CookiePolicy;
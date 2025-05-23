import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import ContentSection from "../../components/shared/Sections/ContentSection/ContentSection";
import dcmaBannerImg from './../../assets/Images/dcma-banner.png';

const dmcaContent = (
  <>
    <h2>1. Reporting Copyright Infringement</h2>
    <p>
      If you believe that any content on our website infringes upon your
      copyright, you may submit a DMCA takedown request by providing the
      following information:
    </p>
    <ul>
      <li>
        A description of the copyrighted work you claim has been infringed.
      </li>
      <li>
        The exact URL or location of the infringing content on our website.
      </li>
      <li>
        Your contact details, including name, email address, and phone number.
      </li>
      <li>
        A statement that you have a good faith belief that the use of the
        material is not authorized by the copyright owner.
      </li>
      <li>
        A statement that the information in your complaint is accurate and that
        you are the copyright owner or authorized to act on their behalf.
      </li>
      <li>Your physical or electronic signature.</li>
    </ul>
    <h2>2. Response to DMCA Notices</h2>
    <p>Upon receiving a valid DMCA takedown notice, Jovi Realty will:</p>
    <li>
      Review the request and remove or disable access to the infringing content.
    </li>
    <li>Notify the user who uploaded the content about the complaint.</li>
    <li>
      Allow the user to submit a counter-notification if they believe the
      content was removed in error.
    </li>
    <h2>3. Submitting a Counter-Notification</h2>
    <p>
      If you believe your content was wrongfully removed, you may send a
      counter-notification containing:
    </p>
    <ul>
      <li>A description of the removed content and its prior location.</li>
      <li>
        A statement that you believe the removal was a mistake or
        misidentification.
      </li>
      <li>Your contact details, including name, email, and phone number.</li>
      <li>
        A statement that you consent to the jurisdiction of your local federal
        court.
      </li>
      <li>Your physical or electronic signature.</li>
    </ul>
    <h2>4. Repeat Infringers</h2>
    <p>
      Jovi Realty reserves the right to terminate access for users who
      repeatedly violate copyright laws.
    </p>
    <h2>5. Changes to This Policy</h2>
    <p>
      We may update this DMCA Policy from time to time. Any changes will be
      posted on this page with an updated date. By using Jovi Realty's website,
      you acknowledge and agree to this DMCA Policy.
    </p>
  </>
);

const DCMAPolicy = () => {
  return (
    <div className="dmca-policy">
      <Header />
      <Banner
        backgroundImage={dcmaBannerImg}
        title="DCMA Policy"
      />
      <ContentSection content={dmcaContent} />
      <Footer />
    </div>
  );
};

export default DCMAPolicy;
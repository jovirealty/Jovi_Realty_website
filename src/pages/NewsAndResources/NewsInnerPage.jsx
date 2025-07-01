import React from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import ContentSection from "../../components/shared/Sections/ContentSection/ContentSection";
import NewsSection from "../../components/shared/Sections/NewsSection/NewsSection";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";

import newsBannerImg from './../../assets/Images/newsInner-banner.png';
import newsInnerImg_1 from '../../assets/Images/newsInnerImg.png'
import newsInnerImg_2 from '../../assets/Images/newsInnerImg-2.png'

const NewsInnerPageContent = (
  <>
    <h2>Do The Necessary Preparations To Make Your Home Shine</h2>
    <p>When you have decided on the right time to sell, have hired a professional, and feel that you have priced the home appropriately, it is time to prepare your home for sale. This means upgrading the home’s curb appeal by taking care of the lawn, applying a fresh coat of paint, getting a new front door, repairing or replacing the roof, or simply planting flowers. The inside of your home should be “open house ready” as well. Along with a deep clean and getting rid of clutter, you want to reduce the evidence that your family lives there in order for potential buyers to visualize their family living there.
      You do not want buyers walking through your home and pointing out all of the maintenance and repairs that they will have to do to move in. When this happens, you waste precious time negotiating the price based on the work that needs to be done, or you waste time fixing all of their requests. Before the home goes up for sale, take the time to prepare your home for sale and set the stage. Both interior and exterior upgrades can help show off your home’s best qualities and help buyers fall in love with it sooner. Read below on how to sell your house fast.</p>

    <h2>Promote The Neighbourhood To Help Buyers See The Whole Picture</h2>
    <p>Home buyers are not just committing to a home, they are committing to the neighbourhood as well. They may love the home but may ask for some time exploring the community and getting a feel for what it would feel like to live there. To help buyers get to know the area better, put together information that details the nearby schools, restaurants, traffic patterns, grocery stores, and neighbourhood events. If they fall in love with the location and the feel of the neighbourhood, they will most likely be able to overlook small issues with the home. They will also be eager to close the deal and start their new life in the new community.
      The more information you can give them, the easier it will be for them to make a decision. Make sure your Realtor is a neighbourhood expert too, so they can sell both the home and the community to interested buyers.</p>

    <img className="full-banner" src={newsInnerImg_1} alt="Neighbourhood Banner" />

    <h2>Maximize Your Viewings To Increase Your Chances Of A Sale</h2>
    <p>
      Hosting an open house is a popular marketing strategy for selling homes, but some homeowners do not like the idea of strangers parading through their home regularly. If open houses and showings are not something you are interested in, make sure you discuss this with your Realtor so they can utilize other marketing techniques to generate interest.
      If you are interested in using open houses to sell your home, it is important that you maximize each one so that you can reach the most people in the shortest amount of time. To make the most of your viewings, consider a few of these ideas:</p>
    <ul>
      <li>Make sure your home is listed across many different online platforms (including social media)</li>
      <li>Do not forget traditional marketing techniques such as flyers and a “for sale” sign in your yard</li>
      <li>Encourage your friends and family to share your listing with people they know. Word of mouth can be a very powerful selling tool.</li>
    </ul>
    <p>
      Your Realtor will help you plan and schedule your open houses and help you prepare your home for successful viewing. Some homeowners prefer to be in the home during an open house receive feedback from potential buyers. Others prefer to leave the house and trust their Realtor to sell the home’s key points as interested buyers walk through.
    </p>

    <h2>Pick The Right Buyer</h2>
    <p>
      When a quick sale is your goal, it is important to remember that the right buyer is not always the buyer with the highest bid. The right buyer will be someone who is motivated, pre-approved, and ready to move. Ask these questions (or have your real estate professional) ask these questions to see which buyer is going to make closing the deal as quick and easy as possible.
      If selling your home fast is the goal, it is important that you take as much time before listing the home to make sure your home is in peak condition for buyers. Working with a professional who understands your time restraints can help move the process forward and help you sell quickly without sacrificing profit.
    </p>

    <img className="full-banner" src={newsInnerImg_2} alt="Neighbourhood Banner" />

    <h2>The Jovi Realty Team Sells Houses Fast</h2>
    <p>
      Jovi Realty has been in the home-selling business for years and knows the Vancouver market intimately. Jovi Realty agents work with an extensive network of motivated buyers, connecting sellers with motivated buyers from the start. If you want to sell your house fast, contact Jovi Realty today to discuss the first step in listing your home and then closing the deal.
    </p>
  </>
);

const NewsInnerPage = () => {
  return (
    <div className="privacy-policy">
      <Header />
      <Banner backgroundImage={newsBannerImg} title="How To Sell Your House Fast" />
      <ContentSection content={NewsInnerPageContent} />
      <NewsSection totalPosts={6} className="pt-0" title="Must Read" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default NewsInnerPage
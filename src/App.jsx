import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './assets/CSS/style.css';
import './assets/CSS/responsive.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Buy from './pages/PropertyListing/Buy';
import Rent from './pages/PropertyListing/Rent';
import PropertyInner from './pages/PropertyListing/PropertyInner';
import FindAnAgent from './pages/FindAnAgent/FindAnAgent';
import AgentProfile from './pages/FindAnAgent/AgentProfile';
import NewsAndResources from './pages/NewsAndResources/NewsAndResources';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import DMCAPolicy from './pages/DCMAPolicy/DCMAPolicy';
import ContactUs from './pages/ContactUs/ContactUs';
import JoinJovi from './pages/JoinJovi/JoinJovi';
import SellYourProperty from './pages/SellYourProperty/SellYourProperty';
import PropertyManagement from './pages/PropertyManagement/PropertyManagement';
import NewsInnerPage from './pages/NewsAndResources/NewsInnerPage';
import AgentDashBoard from './pages/Agent Dashboard/AgentDashBoard';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<div className="min-h-screen flex flex-col">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/property-listing/buy" element={<Buy />} />
					<Route path="/property-listing/rent" element={<Rent />} />
					<Route path="/property-listing/property-inner" element={<PropertyInner />} />
					<Route path="/find-an-agent" element={<FindAnAgent />} />
					<Route path="/find-an-agent/agent-profile" element={<AgentProfile />} />
					<Route path="/news-and-resources" element={<NewsAndResources />} />
					<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/cookie-policy" element={<CookiePolicy />} />
					<Route path="/dcma-policy" element={<DMCAPolicy />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="/join-jovi" element={<JoinJovi />} />
					<Route path="/sell" element={<SellYourProperty />} />
					<Route path="/property-management" element={<PropertyManagement />} />
					<Route path="/news-and-resources/news-inner-page" element={<NewsInnerPage />} />
					<Route path="/agent-dashboard" element={<AgentDashBoard />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</div>
		</Router>

	);
};

export default App;
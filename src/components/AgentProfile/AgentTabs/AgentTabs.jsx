import React, { useState, useRef } from 'react';
import './AgentTabs.css';
import PropertyCard from '../../shared/Elements/PropertyCard/PropertyCard';
import PropertiesData from '../../Data/PropertiesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AgentTabs = () => {
    const [activeTab, setActiveTab] = useState('about');
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section>
            <div className="agent-tabs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center gap-20">
                            <button
                                className={`btn ${activeTab === 'about' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setActiveTab('about')}
                            >
                                About Me
                            </button>
                            <button
                                className={`btn ${activeTab === 'listing' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setActiveTab('listing')}
                            >
                                Active Listing
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="agent-tabs-content">
                <div className="container d-flex flex-column align-items-center justify-content-center position-relative">
                    <div className="row w-100">
                        <div className="col-12">
                            {/* About Me Tab */}
                            <div
                                className="about-me-content text-center"
                                style={{ display: activeTab === 'about' ? 'block' : 'none' }}
                            >
                                <div className="main-h2 mb-4">About Me</div>
                                <p>
                                    For over a decade, I assisted many families and individuals in making the proper choices, whether looking for a place to retire, investing in real estate to build wealth, or buying their first home and creating memories with their loved ones.<br />
                                    I can assist you in buying or selling your property with my tremendous knowledge in the market conditions and tools that he uses to get you the best evolutions by specific products and areas that you are looking for and in a timely manner that fits your goals.
                                    I have a major in economics and accounting backed by experience as an accountant for large companies and was raised in a house of real estate traders and entrepreneurs.
                                </p>
                            </div>

                            {/* Active Listing Tab with Slider */}
                            <div
                                className="active-listing-content"
                                style={{ display: activeTab === 'listing' ? 'block' : 'none' }}
                            >
                                <div>
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            nextEl: '.property-navigation .property-button-next',
                                            prevEl: '.property-navigation .property-button-prev'
                                          }}
                                        breakpoints={{
                                            576: { slidesPerView: 1 }, // Mobile
                                            768: { slidesPerView: 2 }, // Tablet
                                            1024: { slidesPerView: 3 }, // Desktop
                                            1200: { slidesPerView: 3 }, // Large Desktop
                                        }}
                                    >
                                        {PropertiesData.map((property) => (
                                            <SwiperSlide key={property.id}>
                                                <div className="d-flex justify-content-center">
                                                    <PropertyCard property={property} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>                                    
                                    <div className="property-navigation">
                                        <div className="property-button-prev slider-arrow position-absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <circle cx="24.3928" cy="24.3928" r="23.8928" transform="matrix(-1 0 0 1 49.2412 0.330566)" fill="white" stroke="#0244C0" />
                                            <path d="M29.189 17.7533C29.5797 17.3626 29.5795 16.7292 29.1887 16.3387L29.1019 16.252C28.7113 15.8618 28.0785 15.8619 27.6881 16.2522L20.2161 23.7216C20.0843 23.8526 19.9796 24.0084 19.9082 24.18C19.8368 24.3516 19.8001 24.5356 19.8001 24.7215C19.8001 24.9074 19.8368 25.0914 19.9082 25.263C19.9796 25.4346 20.0843 25.5904 20.2161 25.7214L27.6878 33.1944C28.0783 33.585 28.7115 33.585 29.1021 33.1944L29.188 33.1085C29.5785 32.718 29.5786 32.0849 29.1881 31.6943L22.9257 25.4307C22.5352 25.0402 22.5352 24.4071 22.9257 24.0166L29.189 17.7533Z" fill="#0244C0" />
                                        </svg>
                                        </div>
                                        <div className="property-button-next slider-arrow position-absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
                                            <circle cx="24.6072" cy="24.7234" r="24.3928" fill="white" stroke="#0244C0" />
                                            <path d="M20.2665 17.7533C19.8759 17.3626 19.876 16.7292 20.2669 16.3387L20.3537 16.252C20.7442 15.8618 21.377 15.8619 21.7674 16.2522L29.2395 23.7216C29.3713 23.8526 29.4759 24.0084 29.5473 24.18C29.6187 24.3516 29.6555 24.5356 29.6555 24.7215C29.6555 24.9074 29.6187 25.0914 29.5473 25.263C29.4759 25.4346 29.3713 25.5904 29.2395 25.7214L21.7678 33.1944C21.3773 33.585 20.7441 33.585 20.3535 33.1944L20.2675 33.1085C19.877 32.718 19.877 32.0849 20.2675 31.6943L26.5299 25.4307C26.9204 25.0402 26.9203 24.4071 26.5298 24.0166L20.2665 17.7533Z" fill="#0244C0" />
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentTabs;

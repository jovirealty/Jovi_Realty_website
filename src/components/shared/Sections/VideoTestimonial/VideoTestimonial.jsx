import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./VideoTestimonial.css";
import placeholderVideo from "../../../../assets/Videos/placeholder-video.mp4";
import clientThumbnail1 from "../../../../assets/Images/clients-video-thumbnail-1.png";
import clientThumbnail2 from "../../../../assets/Images/clients-video-thumbnail-2.png";
import clientThumbnail3 from "../../../../assets/Images/clients-video-thumbnail-3.png";
import clientThumbnail4 from "../../../../assets/Images/clients-video-thumbnail-4.png";

const VideoTestimonial = ({ className = "" }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const testimonials = [
    { thumbnail: clientThumbnail1 },
    { thumbnail: clientThumbnail2 },
    { thumbnail: clientThumbnail3 },
    { thumbnail: clientThumbnail4 },
    { thumbnail: clientThumbnail1 },
    { thumbnail: clientThumbnail2 },
    { thumbnail: clientThumbnail3 },
    { thumbnail: clientThumbnail4 },
  ];

  const openLightbox = (index) => {
    setCurrentVideo(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className={`video-testimonial-sec ${className}`}>
      <div className="container video-testimonial-con">
        <h2 className="main-h2 text-center mb-5">What Our Clients Say</h2>

        <div className="swiper-container mt-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".video-testimonial-button-next",
              prevEl: ".video-testimonial-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="video-testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className="video-testimonial-card"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={`Client Testimonial ${index + 1}`}
                  />
                  <div className="play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M39.6562 21.3602C40.364 21.7433 40.9561 22.3152 41.369 23.0146C41.7819 23.714 42 24.5146 42 25.3306C42 26.1465 41.7819 26.9471 41.369 27.6465C40.9561 28.346 40.364 28.9179 39.6562 29.301L20.7747 39.7512C17.7344 41.4356 14 39.2457 14 35.7823V14.8804C14 11.4155 17.7344 9.22706 20.7747 10.9085L39.6562 21.3602Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="video-testimonials-navigation">
            <div className="video-testimonial-button-prev slider-arrow">
              {/* Prev Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="24.3928" cy="24.3928" r="23.8928" transform="matrix(-1 0 0 1 49.2412 0.330566)" fill="white" stroke="#0244C0" />
                <path
                  d="M29.189 17.7533C29.5797 17.3626 29.5795 16.7292 29.1887 16.3387L29.1019 16.252C28.7113 15.8618 28.0785 15.8619 27.6881 16.2522L20.2161 23.7216C20.0843 23.8526 19.9796 24.0084 19.9082 24.18C19.8368 24.3516 19.8001 24.5356 19.8001 24.7215C19.8001 24.9074 19.8368 25.0914 19.9082 25.263C19.9796 25.4346 20.0843 25.5904 20.2161 25.7214L27.6878 33.1944C28.0783 33.585 28.7115 33.585 29.1021 33.1944L29.188 33.1085C29.5785 32.718 29.5786 32.0849 29.1881 31.6943L22.9257 25.4307C22.5352 25.0402 22.5352 24.4071 22.9257 24.0166L29.189 17.7533Z"
                  fill="#0244C0"
                />
              </svg>
            </div>
            <div className="video-testimonial-button-next slider-arrow">
              {/* Next Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
                <circle cx="24.6072" cy="24.7234" r="24.3928" fill="white" stroke="#0244C0" />
                <path
                  d="M20.2665 17.7533C19.8759 17.3626 19.876 16.7292 20.2669 16.3387L20.3537 16.252C20.7442 15.8618 21.377 15.8619 21.7674 16.2522L29.2395 23.7216C29.3713 23.8526 29.4759 24.0084 29.5473 24.18C29.6187 24.3516 29.6555 24.5356 29.6555 24.7215C29.6555 24.9074 29.6187 25.0914 29.5473 25.263C29.4759 25.4346 29.3713 25.5904 29.2395 25.7214L21.7678 33.1944C21.3773 33.585 20.7441 33.585 20.3535 33.1944L20.2675 33.1085C19.877 32.718 19.877 32.0849 20.2675 31.6943L26.5299 25.4307C26.9204 25.0402 26.9203 24.4071 26.5298 24.0166L20.2665 17.7533Z"
                  fill="#0244C0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="video-lightbox" onClick={closeLightbox}>
          <div
            className="video-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeLightbox}>
              ×
            </button>
            <video controls autoPlay>
              <source src={placeholderVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonial;

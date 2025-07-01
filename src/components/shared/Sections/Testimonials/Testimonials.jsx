import React from 'react';
import './Testimonials.css';
import fiveStarImg from './../../../../assets/Images/5-star.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Sarah Tom',
    role: 'Home Seller',
    text: "Jovi Realty made finding our dream home effortless! Their team was professional, responsive, and truly understood our needs. From the first consultation to closing, they guided us every step of the way. We couldn't be happier with our new home."
  },
  {
    name: 'Mohammed Chand',
    role: 'Home Seller',
    text: "Jovi Realty made finding our dream home effortless! Their team was professional, responsive, and truly understood our needs. From the first consultation to closing, they guided us every step of the way. We couldn't be happier with our new home."
  },
  {
    name: 'Sarah Tom',
    role: 'Home Seller',
    text: "Jovi Realty made finding our dream home effortless! Their team was professional, responsive, and truly understood our needs. From the first consultation to closing, they guided us every step of the way. We couldn't be happier with our new home."
  },
  {
    name: 'Mohammed Chand',
    role: 'Home Seller',
    text: "Jovi Realty made finding our dream home effortless! Their team was professional, responsive, and truly understood our needs. From the first consultation to closing, they guided us every step of the way. We couldn't be happier with our new home."
  }
];

const Testimonials = ({ className = '' }) => {
  return (
    <section className={`testimonials-sec position-relative ${className}`}>
      <div className="container testimonials-con">
        <h2 className="main-h2 text-center">What Our Clients Say</h2>

        <div className="mt-5 position-relative">
          <Swiper
            className="testimonials-swiper"
            modules={[Navigation]}
            spaceBetween={40}
            loop={true}
            navigation={{
              nextEl: '.testimonials-button-next',
              prevEl: '.testimonials-button-prev'
            }}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              769: {
                slidesPerView: 2
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <h4 className="name mb-4">
                    {testimonial.name} <span>- {testimonial.role}</span>
                  </h4>
                  <div className="stars mb-4">
                    <img src={fiveStarImg} alt="5 Star Rating" />
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='testimonials-navigation'>
            <div className="testimonials-button-prev slider-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="24.3928" cy="24.3928" r="23.8928" transform="matrix(-1 0 0 1 49.2412 0.330566)" fill="white" stroke="#0244C0" />
                <path d="M29.189 17.7533C29.5797 17.3626 29.5795 16.7292 29.1887 16.3387L29.1019 16.252C28.7113 15.8618 28.0785 15.8619 27.6881 16.2522L20.2161 23.7216C20.0843 23.8526 19.9796 24.0084 19.9082 24.18C19.8368 24.3516 19.8001 24.5356 19.8001 24.7215C19.8001 24.9074 19.8368 25.0914 19.9082 25.263C19.9796 25.4346 20.0843 25.5904 20.2161 25.7214L27.6878 33.1944C28.0783 33.585 28.7115 33.585 29.1021 33.1944L29.188 33.1085C29.5785 32.718 29.5786 32.0849 29.1881 31.6943L22.9257 25.4307C22.5352 25.0402 22.5352 24.4071 22.9257 24.0166L29.189 17.7533Z" fill="#0244C0" />
              </svg>
            </div>
            <div className="testimonials-button-next slider-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
                <circle cx="24.6072" cy="24.7234" r="24.3928" fill="white" stroke="#0244C0" />
                <path d="M20.2665 17.7533C19.8759 17.3626 19.876 16.7292 20.2669 16.3387L20.3537 16.252C20.7442 15.8618 21.377 15.8619 21.7674 16.2522L29.2395 23.7216C29.3713 23.8526 29.4759 24.0084 29.5473 24.18C29.6187 24.3516 29.6555 24.5356 29.6555 24.7215C29.6555 24.9074 29.6187 25.0914 29.5473 25.263C29.4759 25.4346 29.3713 25.5904 29.2395 25.7214L21.7678 33.1944C21.3773 33.585 20.7441 33.585 20.3535 33.1944L20.2675 33.1085C19.877 32.718 19.877 32.0849 20.2675 31.6943L26.5299 25.4307C26.9204 25.0402 26.9203 24.4071 26.5298 24.0166L20.2665 17.7533Z" fill="#0244C0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

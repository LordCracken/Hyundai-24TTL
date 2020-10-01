import React from 'react';
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import firstCar from '../images/Exterior/car-1.jpg';
import secondCar from '../images/Exterior/car-2.jpg';

SwiperCore.use([Scrollbar]);

const Exterior = () => (
  <section className="exterior">
    <h2 className="title exterior__title">Exterior</h2>
    <p className="paragraph exterior__paragraph">
      The forward-looking front features the 'Sensures Sporty' design directionality and captures a new design
      vision, from the sleek, sporty side to the rear with a wide rear lamp.
    </p>
    <Swiper 
      scrollbar={{ el: '.exterior__scrollbar', draggable: true }} 
      slidesPerView={1} 
      breakpoints={ 
        {
          320: {spaceBetween: 9}, 
          576: {spaceBetween: 15}, 
          768: {spaceBetween: 20}, 
          992: {spaceBetween: 40}, 
          1200: {spaceBetween: 52}
        } 
      }
      className="slider exterior__slider">
      <SwiperSlide className="exterior__slide">
        <img src={firstCar} alt="Hyundai" className="exterior__image" />
      </SwiperSlide>
      <SwiperSlide className="exterior__slide">
        <img src={secondCar} alt="Hyundai" className="exterior__image" />
      </SwiperSlide>
      <SwiperSlide className="exterior__slide">
        <img src={firstCar} alt="Hyundai" className="exterior__image" />
      </SwiperSlide>
      <SwiperSlide className="exterior__slide">
        <img src={secondCar} alt="Hyundai" className="exterior__image" />
      </SwiperSlide>
      <SwiperSlide className="exterior__slide">
        <img src={firstCar} alt="Hyundai" className="exterior__image" />
      </SwiperSlide>
    </Swiper>
    <div className="exterior__scrollbar swiper-scrollbar"></div>
  </section>
);

export default Exterior;

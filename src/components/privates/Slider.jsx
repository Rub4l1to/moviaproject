import React, { useEffect, useRef, useState } from "react";

// Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

// Components
import { Film } from "..";

Swiper.use([Navigation]);

const Slider = ({ films, favFilms }) => {

  const swiper = useRef(null);

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      effect: "coverflow",
      mousewheelControl: true,
      // grabCursor: true,
      spaceBetween: 20,
      observer: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2.5,
        },
        920: {
          slidesPerView: 3.5,
        },
        1150: {
          slidesPerView: 4.5,
        },
        1450: {
          slidesPerView: 5.5,
        },
        1650: {
          slidesPerView: 6.5,
        },
        1950: {
          slidesPerView: 6.5,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="u-margin-top-medium u-margin-bottom-medium slider">
      <div className="swiperMainContainer">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {films.map((element, key) => (
              <div className="swiper-slide" key={key}>
                <Film {...{ element, favFilms }} />
              </div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

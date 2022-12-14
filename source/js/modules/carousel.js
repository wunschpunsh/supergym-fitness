/* global Swiper */

import '../vendor/swiper.js';

const createCarouselReviews = () => {
  return new Swiper('.swiper--carousel', {
    speed: 700,
    slidesPerView: 1,
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      768: {
        allowTouchMove: true,
      },
    },
    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
    },
  });
};

export {createCarouselReviews};

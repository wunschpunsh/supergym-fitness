/* global Swiper */

import '../vendor/swiper.js';

const createSliderCoaches = () => {
  const swiper = new Swiper('.swiper--coaches', {
    loop: true,
    speed: 700,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.coaches__swiper-button--next',
      prevEl: '.coaches__swiper-button--prev',
    },
  });

  const sliderItemsArray = Array.from(swiper.slides);

  let firstDublicateItems = [];

  const findFirstDublicateItems = () => {
    sliderItemsArray.some((element) => {
      if (element.classList.contains('swiper-slide-duplicate')) {
        firstDublicateItems.push(element);
      }
      return !element.classList.contains('swiper-slide-duplicate');
    });
  };

  const setTabOnTheFirstCard = () => {
    findFirstDublicateItems();
    firstDublicateItems.forEach((item) => {
      item.removeAttribute('tabindex');
    });
  };

  setTabOnTheFirstCard();
};

export {createSliderCoaches};

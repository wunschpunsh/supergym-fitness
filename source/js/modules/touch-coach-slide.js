const slideList = document.querySelector('.slide__list');

// Except Destop Size
const MAX_WIDTH = '(max-width:1199px)';
const breakpoint = window.matchMedia(MAX_WIDTH);

const onSlideClick = (evt) => {
  const slide = evt.target.closest('.slide__item');
  slide.classList.toggle('is-open');
};

const chooseSlideByTouch = () => {
  if (breakpoint.matches) {
    slideList.addEventListener('click', onSlideClick);
  } else {
    slideList.removeEventListener('click', onSlideClick);
  }
};

export {chooseSlideByTouch};

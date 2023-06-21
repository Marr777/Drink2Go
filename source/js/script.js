/* в этот файл добавляет скрипты*/
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper(".swiper", {
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper__button--next",
    prevEl: ".swiper__button--prev",
  },
  pagination: {
    el: ".swiper__pagination",
  },
  mousewheel: false,
  keyboard: true,

  wrapperClass: 'swiper__wrapper',
  slideClass: 'swiper__item',
});

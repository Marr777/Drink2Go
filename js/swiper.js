import Swiper from"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";const setSwiper=()=>{new Swiper(".swiper",{grabCursor:"true",navigation:{nextEl:".swiper__button--next",prevEl:".swiper__button--prev"},pagination:{el:".swiper__pagination",type:"bullets",bulletClass:"swiper__bullet",bulletActiveClass:"swiper__bullet--active",clickable:!0},mousewheel:!1,keyboard:!0,wrapperClass:"swiper__wrapper",slideClass:"swiper__item"})};export{setSwiper};
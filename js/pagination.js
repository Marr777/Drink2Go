const TABLET_WIDTH=768,buttonPrev=document.querySelector(".catalog__pagination-btn--prev"),buttonNext=document.querySelector(".catalog__pagination-btn--next"),checkTablet=()=>{window.innerWidth>=768?(buttonPrev.textContent="Назад",buttonNext.textContent="Вперед"):(buttonPrev.textContent=" ",buttonNext.textContent=" ")},onWindowResize=()=>{checkTablet()};export const checkWindowSize=()=>{checkTablet(),window.addEventListener("resize",onWindowResize)};
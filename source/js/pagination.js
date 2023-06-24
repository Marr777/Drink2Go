const TABLET_WIDTH = 768;

const buttonPrev = document.querySelector('.catalog__pagination-btn--prev');
const buttonNext = document.querySelector('.catalog__pagination-btn--next');

const checkTablet = () => {
  if (window.innerWidth >= TABLET_WIDTH) {
    buttonPrev.textContent = 'Назад';
    buttonNext.textContent = 'Вперед';
  } else {
    buttonPrev.textContent = '\u00A0';
    buttonNext.textContent = '\u00A0';
  }
}

const onWindowResize = () => {
    checkTablet();
}

export const checkWindowSize = () => {
  checkTablet();
  window.addEventListener('resize', onWindowResize);
}


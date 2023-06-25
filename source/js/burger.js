const header = document.querySelector('.page-header');
const toggleBtn = document.querySelector('.page-header__nav-toggle');
const navList = document.querySelector('.nav-list--site');

const animateNavList = (fn, delay) => {
  setTimeout(() => fn(), delay);
}

const openNavList = () => {
  navList.style.transform = 'translateY(63%)';
}

const closeNavList = () => {
  navList.style.transform = 'translateY(-100%)';
}

const closeHeader = () => {
  header.classList.remove('page-header--open');
}

const onBurgerBtnClick = () => {
  if (header.classList.contains('page-header--open')) {
    toggleBtn.classList.remove('page-header__nav-toggle--open');
    closeNavList();
    animateNavList(closeHeader, 550);
  } else {
    toggleBtn.classList.add('page-header__nav-toggle--open');
    header.classList.add('page-header--open');
    animateNavList(openNavList, 0.1);
  }
}

export const initBurgerMenu = () => {
  header.classList.remove('page-header--nojs');
  toggleBtn.classList.remove('page-header__nav-toggle--open')

  toggleBtn.addEventListener('click', onBurgerBtnClick);
}

const root = document.documentElement;
const header = document.querySelector('.header');
const menuToggle = document.querySelector('button.header__link');

const search = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search input');
const searchToggle = document.querySelector('.header__search button');

root.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
});

window.addEventListener('resize', () => {
  root.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
});

searchToggle.addEventListener('click', (e) => {
  if (search.classList.contains('header__search--closed')) {
    e.preventDefault();
    search.classList.remove('header__search--closed');
    searchInput.focus();
  }
});
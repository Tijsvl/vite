import { html } from 'lit-html';

export const Header = () => html`
  <header class="header">
    <div class="skiplinks">
      <a href="#main" class="button">Ga naar inhoud</a>
    </div>
    <div class="header__top">
      <div class="header__logo">
        <a href="#">
          <figure>
            <picture>
              <source media="(min-width: 48rem)" srcset="/assets/logo-large.svg" height="125">
              <img src="/assets/logo-small.svg" alt="NCTV" height="60">
            </picture>
          </figure>
        </a>
      </div>
    </div>
    <div class="header__bottom">
      <nav class="header__navigation">
        <a href="#" aria-label="Home" class="header__link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Home Icoon</title>
            <use href="#icon-home"></use>
          </svg>
          <span>Home</span>
        </a>
        <button class="header__link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Menu Icoon</title>
            <use href="#icon-menu"></use>
          </svg>
          <span>Menu</span>
        </button>
      </nav>
      <form class="header__search header__search--closed" action="#" method="get">
        <input type="search" name="query" placeholder="Zoeken">
        <button title="Open Zoekveld" data-search="Start Zoeken">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Zoek icoon</title>
            <use href="#icon-search"></use>
          </svg>
        </button>
      </form>
    </div>
  </header>
`;

export default {
  title: 'Components/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};

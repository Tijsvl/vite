import { html } from 'lit-html';
import { Header } from 'components/header/Header.stories';
import { Main } from 'components/main/Main.stories';
import { Footer } from 'components/footer/Footer.stories';

export const Home = () => html`
  ${Header()}
  ${Main({
    variant: 'home',
    content: html`<p>Content</p>`
  })}
  ${Footer()}
  <script type="module" src="/src/components/index.js"></script>
`;

export default {
  title: 'Pages/Home',
  parameters: {
    layout: 'fullscreen'
  }
};

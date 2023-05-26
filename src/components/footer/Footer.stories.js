import { html } from 'lit-html';

export const Footer = () => html`
  <footer class="footer">
    <blockquote>De NCTV dient de nationale veiligheid.<br>Wij beschermen belangen, signaleren dreigingen en versterken weerbaarheid.</blockquote>
    <div>
      <h2>Service</h2>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">RSS</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Archief</a></li>
      </ul>
    </div>
    <div>
      <h2>Over deze site</h2>
      <ul>
        <li><a href="#">Copyright</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookies</a></li>
        <li><a href="#">Toegankelijkheid</a></li>
        <li><a href="#">Kwetsbaarheid melden</a></li>
      </ul>
    </div>
  </footer>
`;

export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};

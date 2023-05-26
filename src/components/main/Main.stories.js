import { html } from 'lit-html';

export const Main = (args) => html`
  <main class="page ${args.variant? `page--${args.variant}` : ''}">
    <article>
      <h1>${args.title}</h1>
      ${args.intro && html`<p class="intro">${args.intro}</p>`}
      <div>
        ${args.content}
      </div>
    </article>
    ${args.sidebar && html`<aside>${args.sidebar}</aside>`}
    ${args.bottom && html`<div class="related">${args.bottom}</div>`}
  </main>
`;

export default {
  title: 'Components/Main',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => Main(args)
};

export const Home = {
  args: {
    variant: 'home',
    title: 'Titel',
    intro: 'Dit is de intro tekst',
    content: html`
      <p>Lorem ipsum dolor sit amet.</p>
    `,
  }
};

export const Article = {
  args: {
    variant: 'article',
    title: 'Titel',
    intro: 'Dit is de intro tekst',
    content: html`
      <p>Lorem ipsum dolor sit amet.</p>
      `,
    sidebar: html`<p>Sidebar</p>`,
    bottom: html`<p>Bottom</p>`,
  }
};

export const Overview = {
  args: {
    variant: 'overview',
    title: 'Titel',
    intro: 'Dit is de intro tekst',
    content: html`
      <p>Lorem ipsum dolor sit amet.</p>
    `,
  }
};

export const Search = {
  args: {
    variant: 'search',
    title: 'Titel',
    intro: 'Dit is de intro tekst',
    content: html`
      <p>Lorem ipsum dolor sit amet.</p>
    `,
  }
};

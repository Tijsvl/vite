import { html } from 'lit-html'

export const Main = () => html` <main class="page">MAIN</main> `

export default {
  title: 'Components/Main',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => Main(args)
}

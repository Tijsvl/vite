import React from 'react'

interface IProps {
  innerText?: string
}

export const BackToTop = ({ innerText }: IProps) => {
  return (
    <button
      id="backtotopbutton"
      className="backtotopbutton hidden"
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }}
    >
      <span className="backtotopbutton__text">{innerText || 'Scroll naar boven'}</span>
      <span className="backtotopbutton__icon" />
    </button>
  )
}

export default {
  title: 'www/BackToTop',
  tags: ['autodocs'],
  args: {
    innerText: ''
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => BackToTop(args)
}

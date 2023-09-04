import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Button({ label, variant = 'blue', size = 'auto', disabled = false, readonly = false, arrow = false }) {
  let modifier = ''
  if (size === 'medium') modifier += ' button--medium'
  if (size === 'large') modifier += ' button--large'

  if (variant === 'orange') modifier += ' button--orange'
  if (variant === 'white') modifier += ' button--white'
  if (variant === 'link') modifier += ' button--link'

  if (arrow === 'arrow') modifier += ' button--arrow'
  if (arrow === 'external') modifier += ' button--arrow button--external'

  console.log('variant', variant)

  return (
    <button className={`button${modifier}`} disabled={disabled} readOnly={readonly}>
      {label || 'Button'}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['blue', 'orange', 'white', 'link']),
  size: PropTypes.oneOf(['auto', 'medium', 'large']),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  arrow: PropTypes.oneOf(['none', 'arrow', 'external'])
}

export default Button

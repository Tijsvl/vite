import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => {
  return <Button {...args} />
}

export const Blue = Template.bind({})
Blue.args = {
  label: 'Button',
  variant: 'blue'
}

export const Orange = Template.bind({})
Orange.args = {
  label: 'Button',
  variant: 'orange'
}

export const White = Template.bind({})
White.args = {
  label: 'Button',
  variant: 'white'
}

export const Link = Template.bind({})
Link.args = {
  label: 'Button',
  variant: 'link'
}

export const MediumWidth = Template.bind({})
MediumWidth.args = {
  label: 'Button',
  size: 'medium'
}

export const LargeWidth = Template.bind({})
LargeWidth.args = {
  label: 'Button',
  size: 'large'
}

export const LargeWidthArrow = Template.bind({})
LargeWidthArrow.args = {
  label: 'Button',
  size: 'large',
  arrow: 'arrow'
}

export const LargeWidthExternal = Template.bind({})
LargeWidthExternal.args = {
  label: 'Button',
  size: 'large',
  arrow: 'external'
}

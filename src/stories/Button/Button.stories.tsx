import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})
Filled.args = {
  label: 'Button'
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
  variant: 'outlined'
}

export const Alternative = Template.bind({})
Alternative.args = {
  label: 'Button',
  variant: 'filled',
  color: 'alternative'
}

export const AlternativeOutlined = Template.bind({})
AlternativeOutlined.args = {
  label: 'Button',
  variant: 'outlined',
  color: 'alternative'
}

export const Special = Template.bind({})
Special.args = {
  label: 'Button',
  variant: 'filled',
  color: 'special'
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  variant: 'filled',
  color: 'main',
  loading: true
}

export const Text = Template.bind({})
Text.args = {
  label: 'Button',
  variant: 'text'
}

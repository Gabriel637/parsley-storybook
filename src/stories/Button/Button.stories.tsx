import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'Button'
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  loading: true
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button'
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  label: 'Button'
}

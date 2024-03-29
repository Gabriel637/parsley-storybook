import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loading } from './Loading'

export default {
  title: 'Example/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}

export const Alternative = Template.bind({})
Alternative.args = {
  color: 'alternative'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg'
}

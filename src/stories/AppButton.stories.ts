import type { Meta, StoryObj } from '@storybook/vue3'

import AppButton from '@/components/button/AppButton.vue'

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  render: (args) => ({
    components: { AppButton },
    setup() {
      return { args }
    },
    template: '<AppButton v-bind="args" />'
  })
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Button',
    icon: ['fas', 'fa-user']
  }
}

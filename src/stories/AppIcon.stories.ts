import AppIcon from '@/components/AppIcon.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof AppIcon> = {
  component: AppIcon,
  render: (args) => ({
    components: { AppIcon },
    setup() {
      return { args }
    },
    template: '<AppIcon v-bind="args" />'
  })
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    class: 'text-base-content',
    icon: ['fas', 'fa-user']
  }
}

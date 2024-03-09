import type { Meta, StoryObj } from '@storybook/vue3'

import AppButton from '@/components/button/AppButton.vue'

const meta: Meta<typeof AppButton> = {
  component: AppButton
}

export default meta

type Story = StoryObj<typeof AppButton>

export const Basic: Story = {
  render: () => ({
    components: { AppButton },
    template: '<AppButton />'
  })
}

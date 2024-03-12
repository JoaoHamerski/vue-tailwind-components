import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '@/components/button/AppButton.vue'

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  argTypes: {
    icon: {
      control: 'object'
    },
    iconRight: {
      control: 'object'
    },
    disabled: {
      type: 'boolean'
    },
    loading: {
      type: 'boolean'
    }
  },
  args: {
    label: 'Button'
  },
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

export const Default: Story = {}

export const Icon: Story = {
  args: {
    icon: ['fas', 'fa-user']
  }
}

export const IconRight: Story = {
  args: {
    iconRight: ['fas', 'fa-user']
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const Loading: Story = {
  args: {
    loading: true
  }
}

export const Accent: Story = {
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
        <div class="flex gap-2">
            <AppButton v-bind="args" label="Default" />
            <AppButton v-bind="args" label="Primary" class="btn-primary" />
            <AppButton v-bind="args" label="Secondary" class="btn-secondary" />
            <AppButton v-bind="args" label="Info" class="btn-info"/>
            <AppButton v-bind="args" label="Success" class="btn-success" />
            <AppButton v-bind="args" label="Warning" class="btn-warning" />
            <AppButton v-bind="args" label="Error" class="btn-error" />
        </div>
    `
  })
}

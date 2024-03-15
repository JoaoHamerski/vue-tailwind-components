import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '@/components/button/AppButton.vue'
import { SIZES_CLASS } from '@/components/button/constants'

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  argTypes: {
    label: {
      control: 'text'
    },
    class: {
      control: 'text'
    },
    size: {
      control: 'radio',
      options: Object.keys(SIZES_CLASS)
    },
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
    },
    rounded: {
      type: 'boolean'
    },
    circle: {
      type: 'boolean'
    }
  },
  args: {
    label: 'Button',
    size: 'md'
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

export const Sizes: Story = {
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <div class="flex gap-4">
                <AppButton v-bind="args" size="xs" />
                <AppButton v-bind="args" size="sm" />
                <AppButton v-bind="args" size="md" />
                <AppButton v-bind="args" size="lg" />
            </div>
        `
  })
}

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

export const IconRounded: Story = {
  argTypes: {
    iconRight: {
      table: {
        disable: true
      }
    }
  },
  args: {
    label: undefined,
    icon: ['fas', 'fa-user'],
    circle: true
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
        <AppButton v-bind="args" />
    `
  })
}

export const IconRoundedSizes: Story = {
  args: IconRounded.args,
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    iconRight: {
      table: {
        disable: true
      }
    }
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <div class="flex gap-4">
                <AppButton v-bind="args" size="xs" />
                <AppButton v-bind="args" size="sm" />
                <AppButton v-bind="args" size="md" />
                <AppButton v-bind="args" size="lg" />
            </div>
        `
  })
}

export const Accent: Story = {
  argTypes: {
    class: {
      table: {
        disable: true
      }
    }
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
        <div class="flex flex-col gap-2">
            <div>Default</div>
                <div class="flex gap-2">
                <AppButton v-bind="args" label="Default" />
                <AppButton v-bind="args" label="Primary" class="btn-primary" />
                <AppButton v-bind="args" label="Secondary" class="btn-secondary" />
                <AppButton v-bind="args" label="Info" class="btn-info"/>
                <AppButton v-bind="args" label="Success" class="btn-success" />
                <AppButton v-bind="args" label="Warning" class="btn-warning" />
                <AppButton v-bind="args" label="Error" class="btn-error" />
            </div>

            <div>Outline</div>
            <div class="flex gap-2">
                <AppButton v-bind="args" label="Default" class="btn-outline" />
                <AppButton v-bind="args" label="Primary" class="btn-primary btn-outline" />
                <AppButton v-bind="args" label="Secondary" class="btn-secondary btn-outline" />
                <AppButton v-bind="args" label="Info" class="btn-info btn-outline"/>
                <AppButton v-bind="args" label="Success" class="btn-success btn-outline" />
                <AppButton v-bind="args" label="Warning" class="btn-warning btn-outline" />
                <AppButton v-bind="args" label="Error" class="btn-error btn-outline" />
            </div>
        </div>
    `
  })
}

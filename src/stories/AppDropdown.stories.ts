import AppDropdown from '@/components/dropdown/AppDropdown.vue'

import type { Meta, StoryObj } from '@storybook/vue3'
import { DROPDOWN_ALIGN_CLASS } from '@/components/dropdown/constants'

const meta: Meta<typeof AppDropdown> = {
  component: AppDropdown,
  argTypes: {
    label: {
      control: 'text'
    },
    labelClass: {
      control: 'text'
    },
    align: {
      control: 'radio',
      options: Object.keys(DROPDOWN_ALIGN_CLASS)
    },
    options: {
      control: 'object'
    },
    dropdownWidth: {
      control: 'text'
    }
  },
  args: {
    align: 'br',
    dropdownWidth: '225px'
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
        <SBCentralizedComponent>
            <AppDropdown v-bind="args" />
        </SBCentralizedComponent>
    `
  })
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Dropdown',
    options: [
      { label: 'Item 01' },
      { label: 'Item 02' },
      { label: 'Item 03' },
      { label: 'Item 04' }
    ]
  }
}

export const CustomTrigger: Story = {
  args: { options: Default.args!.options },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <SBCentralizedComponent>
                <div class="flex gap-4 items-center">
                    <AppDropdown v-bind="args">
                        <template #trigger>
                            <b :style="{color: 'red'}">Custom trigger</b>
                        </template>
                    </AppDropdown>
                </div>
            </SBCentralizedComponent>
        `
  })
}

export const TriggerOpenSlotProp: Story = {
  args: CustomTrigger.args,
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <SBCentralizedComponent>
                <AppDropdown v-bind="args">
                    <template #trigger="{ open }">
                        <b>Custom Trigger - dropdown is open: {{ open }}</b>
                    </template>
                </AppDropdown>
            </SBCentralizedComponent>
        `
  })
}

export const CustomContent: Story = {
  args: {
    label: 'Custom Content'
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <SBCentralizedComponent>
                <AppDropdown v-bind="args">
                    <template #content>
                        <div class="p-4">
                            <div class="text-xl font-bold">Custom content</div>
                            <div>Hello World!</div>
                        </div>
                    </template>
                </AppDropdown>
            </SBCentralizedComponent>
        `
  })
}

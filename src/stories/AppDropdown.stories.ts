import AppDropdown from '@/components/dropdown/AppDropdown.vue'

import type { Meta, StoryObj } from '@storybook/vue3'
import { DROPDOWN_ALIGN_CLASS } from '@/components/dropdown/constants'
import type { DropdownOption } from '@/types/components'

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
    },
    chevron: {
      control: 'boolean'
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
      { icon: 'fas fa-user', label: 'Item 01', href: 'https://google.com' },
      { icon: 'fas fa-user', label: 'Item 02' },
      { icon: 'fas fa-user', label: 'Item 03' },
      { icon: 'fas fa-user', label: 'Item 04' }
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
                            <b class="text-red-500 text-bold">Custom trigger</b>
                        </template>
                    </AppDropdown>
                </div>
            </SBCentralizedComponent>
        `
  })
}

export const TrackStateOnCustomTrigger: Story = {
  args: CustomTrigger.args,
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <SBCentralizedComponent>
                <AppDropdown v-bind="args">
                    <template #trigger="{ open }">
                        <b class="text-red-500 text-bold">Custom Trigger - open state is : {{ open }}</b>
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
                        <div class="text-xl font-bold">Custom content</div>
                        <div>Hello World!</div>
                    </template>
                </AppDropdown>
            </SBCentralizedComponent>
        `
  })
}

export const CustomOptions: Story = {
  args: {
    options: [
      { label: 'Go to Google', icon: 'fas fa-user', href: 'https://www.google.com' },
      { label: 'Ipsum', icon: 'fas fa-user' },
      { label: 'Dolor', icon: 'fas fa-user' },
      { label: 'Sit', icon: 'fas fa-user' }
    ]
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
            <SBCentralizedComponent>
                <div class="flex gap-4">
                    <AppDropdown v-bind="args" label="Original" />
                    <AppDropdown v-bind="args" label="Custom">
                        <template #custom-option="{ option }">
                            {{ option.label.toUpperCase() }}
                            <FWIcon :icon="option.icon" />
                        </template>
                    </AppDropdown>
                </div>
            </SBCentralizedComponent>
        `
  })
}

export const CustomOptionsActions: Story = {
  args: {
    label: 'Custom Options Action',
    options: Default.args!.options
  },
  render: (args) => ({
    setup() {
      const onOptionClick = (option: DropdownOption) => {
        alert('You clicked on: \n' + JSON.stringify(option))
      }
      return { args, onOptionClick }
    },
    template: `
        <SBCentralizedComponent>
            <AppDropdown v-bind="args" @option-click="onOptionClick" />
        </SBCentralizedComponent>
    `
  })
}

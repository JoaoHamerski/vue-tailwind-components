import type { Meta, StoryObj } from '@storybook/vue3'
import AppModal from '@/components/modal/AppModal.vue'
import { ref } from 'vue'
import { MODAL_SIZES_CLASS } from '@/components/modal/constants'

const meta: Meta<typeof AppModal> = {
  component: AppModal,
  argTypes: {
    noPadding: {
      control: 'boolean'
    },
    hideCloseBtn: {
      control: 'boolean'
    },
    size: {
      control: 'radio',
      options: Object.keys(MODAL_SIZES_CLASS)
    }
  },
  render: (args) => ({
    setup() {
      const show = ref(false)
      return { args, show }
    },
    template: `
            <button class="btn" @click="show = !show">Open</button>
            <AppModal v-bind="args" v-model:show="show">
                <template #header>
                    <div class="bg-primary text-primary-content font-bold p-5 ">
                        Modal Header
                    </div>
                </template>

                <template #content>
                    Default modal showing all possible features
                </template>

                <template #footer="{ close }">
                    <div class="p-5 flex justify-between">
                        <button class="btn btn-primary">Action</button>
                        <button @click="close" class="btn btn-ghost">Close</button>
                    </div>
                </template>
            </AppModal>
        `
  })
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CloseSlotProp: Story = {
  render: (args) => ({
    setup() {
      const show = ref(false)
      return { args, show }
    },
    template: `
            <button @click="show = !show" class="btn">Open</button>
            <AppModal v-bind="args" v-model:show="show">
                <template #content="{ close }">
                    <div>The button below uses the <code>close</code> method from slot prop</div>
                    <div>
                        <button class="btn" @click="close">Close me from content</button>
                    </div>
                </template>

                <template #footer="{ close }">
                    <div class="p-5">
                        <div>The <code>footer</code> slot also exposes the <code>close</code> method</div>
                        <button class="btn" @click="close">Close me from footer</button>
                    </div>
                </template>
            </AppModal>
        `
  })
}

export const OnScrollableArea: Story = {
  render: (args) => ({
    setup() {
      const show = ref(false)
      return { args, show }
    },
    template: `
            <button class="btn" @click="show = !show">Open</button>
            <div class="h-[200vh]"></div>

            <AppModal v-bind="args" v-model:show="show">
                <template #content>
                    The modal won't be horizontally shifted because we hide the scrollbar <b>before</b> the transition starts and show only <b>after</b> the transition ends.
                </template>
            </AppModal>

            <button class="btn" @click="show = !show">Open</button>
          `
  })
}

export const ScrollableModal: Story = {
  render: (args) => ({
    setup() {
      const show = ref(false)

      return { args, show }
    },
    template: `
            <button @click="show = !show" class="btn">Open</button>
            <AppModal v-bind="args" v-model:show="show">
                <template #content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor et justo eget tempus. Suspendisse condimentum mi quis enim accumsan malesuada in id massa. Curabitur at leo nibh. Praesent imperdiet a ipsum vitae fringilla. Pellentesque non nulla fermentum, lacinia quam et, tempus magna. Duis sed porttitor ipsum. Fusce eu justo vitae orci tempor scelerisque quis quis nisi. Nulla facilisi. In pharetra, tellus eu dapibus volutpat, nisl nunc convallis mi, ullamcorper lacinia mauris magna quis purus. Sed vehicula, metus sit amet scelerisque congue, ante dolor placerat massa, ut placerat nunc velit et purus. Praesent ultrices sodales enim, eget imperdiet libero aliquam vel. Donec elit urna, molestie nec malesuada eu, venenatis dapibus mauris. Vivamus eget mollis nunc.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed condimentum posuere justo. Nulla egestas consectetur luctus. Integer tristique, lectus et bibendum convallis, ex lorem efficitur risus, ut euismod sapien justo sed turpis. Nunc vulputate sit amet erat sed tristique. Duis at lacus consectetur, finibus dolor quis, pretium felis. Nulla sit amet felis at neque vestibulum fermentum. Curabitur vehicula eros efficitur, tincidunt orci sed, ornare nisi. Vivamus mauris nulla, laoreet id vehicula aliquam, pellentesque sed ligula. Phasellus neque urna, dignissim at pellentesque sit amet, dignissim id tortor. Vestibulum efficitur pretium dui ut facilisis. Donec lectus nisi, hendrerit ac faucibus quis, iaculis in urna.

                    Aliquam fringilla lorem ac justo rhoncus, sed hendrerit nisi interdum. Donec ullamcorper condimentum massa et porttitor. Mauris ac ex mi. Duis commodo arcu diam, ut porta nibh sagittis ac. Integer iaculis, elit sed auctor maximus, felis libero fringilla ligula, vel blandit urna tellus in metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                    Maecenas suscipit ligula sem, eget sollicitudin elit laoreet vel. Cras pretium justo quis sem interdum, et placerat eros euismod. Fusce mattis metus erat, vel imperdiet leo gravida eget. Aliquam sit amet imperdiet eros, non vestibulum lacus. Sed non quam interdum, interdum enim ac, consectetur eros. Duis tristique leo in ipsum semper consequat. Nunc sollicitudin pellentesque elit sit amet volutpat. Phasellus ultricies euismod felis, ut tempor urna pharetra eu. Morbi sed vehicula ligula, sed tincidunt justo. Integer placerat ultrices accumsan. Maecenas lacinia lobortis leo et aliquam.

                    Mauris at venenatis diam. Curabitur turpis risus, sagittis et euismod et, molestie ut nisi. Aenean id vehicula ex. Donec et libero nec sapien tincidunt gravida nec eget neque. Phasellus a ullamcorper quam. Etiam non diam quis felis viverra dictum sit amet posuere lectus. Suspendisse sit amet euismod tellus, sed varius nunc. Cras convallis mattis elit. Cras suscipit arcu id lacus viverra, vel faucibus mauris pharetra. Nulla facilisi. Aliquam ullamcorper pulvinar malesuada. Nulla eu cursus augue. Nunc scelerisque velit eget tellus tincidunt viverra. Quisque eu quam rutrum, posuere diam id, ultrices felis. Mauris sagittis pellentesque lacus, id aliquet nisi.
                </template>
            </AppModal>
        `
  })
}

export const HeaderAndFooter: Story = {
  args: {
    hideCloseBtn: true
  },
  render: (args) => ({
    setup() {
      const show = ref(false)
      return { args, show }
    },
    template: `
            <button class="btn" @click="show = !show">Open</button>
            <AppModal v-bind="args" v-model:show="show">
                <template #header>
                    <div class="p-5 bg-primary font-bold text-primary-content rounded-t-lg">Header example for modal</div>
                </template>
                <template #content>
                    <div class="mb-3 font-bold">
                        When the content overflows, it won't scroll the header or footer
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor et justo eget tempus. Suspendisse condimentum mi quis enim accumsan malesuada in id massa. Curabitur at leo nibh. Praesent imperdiet a ipsum vitae fringilla. Pellentesque non nulla fermentum, lacinia quam et, tempus magna. Duis sed porttitor ipsum. Fusce eu justo vitae orci tempor scelerisque quis quis nisi. Nulla facilisi. In pharetra, tellus eu dapibus volutpat, nisl nunc convallis mi, ullamcorper lacinia mauris magna quis purus. Sed vehicula, metus sit amet scelerisque congue, ante dolor placerat massa, ut placerat nunc velit et purus. Praesent ultrices sodales enim, eget imperdiet libero aliquam vel. Donec elit urna, molestie nec malesuada eu, venenatis dapibus mauris. Vivamus eget mollis nunc.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed condimentum posuere justo. Nulla egestas consectetur luctus. Integer tristique, lectus et bibendum convallis, ex lorem efficitur risus, ut euismod sapien justo sed turpis. Nunc vulputate sit amet erat sed tristique. Duis at lacus consectetur, finibus dolor quis, pretium felis. Nulla sit amet felis at neque vestibulum fermentum. Curabitur vehicula eros efficitur, tincidunt orci sed, ornare nisi. Vivamus mauris nulla, laoreet id vehicula aliquam, pellentesque sed ligula. Phasellus neque urna, dignissim at pellentesque sit amet, dignissim id tortor. Vestibulum efficitur pretium dui ut facilisis. Donec lectus nisi, hendrerit ac faucibus quis, iaculis in urna.
                </template>
                <template #footer="{ close }">
                <div class="divider m-0" />
                <div class="p-5 flex justify-between">
                        <button class="btn btn-primary">Action</button>
                        <button class="btn btn-ghost" @click="close">Cancel</button>
                    </div>
                </template>
            </AppModal>
        `
  })
}

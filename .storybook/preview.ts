import { Preview } from '@storybook/vue3'
import './setup'
import '@storybook/addon-console'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview

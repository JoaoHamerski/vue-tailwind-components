import '@/assets/main.css'
import type { Preview } from '@storybook/vue3'
import withThemeDecorator from './withTheme.decorator'
import withThemeGlobalType from './withTheme.globalType'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withThemeDecorator],
  globalTypes: {
    ...withThemeGlobalType
  }
}

export default preview
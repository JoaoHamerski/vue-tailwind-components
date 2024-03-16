import { Decorator } from '@storybook/vue3'
import { ref } from 'vue'
import { DEFAULT_THEME } from './withTheme.globalType'
import SBThemeProvider from './helpers/SBThemeProvider.vue'

const theme = ref(DEFAULT_THEME)

const withThemeDecorator: Decorator = (Story, context) => {
  const storybookHtml = document.querySelector('html')

  theme.value = context.globals.theme

  if (theme.value !== 'side-by-side') {
    storybookHtml.setAttribute('data-theme', theme.value)
  } else {
    storybookHtml.removeAttribute('data-theme')
  }

  return {
    components: { Story, SBThemeProvider },
    setup: () => ({ theme }),
    template: `
        <SBThemeProvider :theme="theme">
            <story />
        </SBThemeProvider>
      `
  }
}

export default withThemeDecorator

import { setup } from '@storybook/vue3'
import Bootstrap from '../src/bootstrap'
import '@/assets/main.css'
import '@/libs/fontawesome'
import type { App } from 'vue'
import SBCentralizedComponent from './helpers/SBCentralizedComponent.vue'
import SBThemeProvider from './helpers/SBThemeProvider.vue'

setup((app) => {
  const bootstrap = new Bootstrap(app)

  registerGlobalHelpers(app)

  // prettier-ignore
  bootstrap
  .globalComponents()
  .fontAwesome()
})

const registerGlobalHelpers = (app: App) => {
  app.component('SBCentralizedComponent', SBCentralizedComponent)
  app.component('SBThemeProvider', SBThemeProvider)
}

import { setup } from '@storybook/vue3'
import Bootstrap from '../src/bootstrap'
import '@/assets/main.css'
import '@/libs/fontawesome'
import type { App } from 'vue'
import CentralizedComponent from './helpers/CentralizedComponent.vue'
import ThemeProvider from './helpers/ThemeProvider.vue'

setup((app) => {
  const bootstrap = new Bootstrap(app)

  registerGlobalHelpers(app)

  // prettier-ignore
  bootstrap
  .globalComponents()
  .fontAwesome()
})

const registerGlobalHelpers = (app: App) => {
  app.component('CentralizedComponent', CentralizedComponent)
  app.component('ThemeProvider', ThemeProvider)
}

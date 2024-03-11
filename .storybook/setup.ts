import { setup } from '@storybook/vue3'
import Bootstrap from '../src/bootstrap'
import '@/assets/main.css'
import '@/libs/fontawesome'

setup((app) => {
  const bootstrap = new Bootstrap(app)

  bootstrap.fontAwesome()
})

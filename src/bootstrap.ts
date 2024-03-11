import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { App } from 'vue'

class Bootstrap {
  protected app: App

  constructor(app: App) {
    this.app = app
  }

  public mount(selector: string) {
    this.app.mount(selector)
  }

  public fontAwesome() {
    this.app.component('FWIcon', FontAwesomeIcon)

    return this
  }
}

export default Bootstrap

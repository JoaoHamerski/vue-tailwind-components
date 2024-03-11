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

  public globalComponents() {
    const components = import.meta.glob('../**/App*.vue', { eager: true })

    Object.entries(components).forEach(([path, definition]: [string, any]) => {
      const componentName = path
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')

      this.app.component(componentName, definition.default)
    })

    return this
  }

  public fontAwesome() {
    this.app.component('FWIcon', FontAwesomeIcon)

    return this
  }
}

export default Bootstrap

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Bootstrap from './bootstrap'

const bootstrap = new Bootstrap(createApp(App))

// prettier-ignore
bootstrap
    .fontAwesome()
    .globalComponents()
    .mount('#app')

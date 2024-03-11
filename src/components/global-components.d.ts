import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type AppIcon from './AppIcon.vue'
import type AppButton from './button/AppButton.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppButton: typeof AppButton
    AppIcon: typeof AppIcon
    FWIcon: typeof FontAwesomeIcon
  }
}

import type { ICONS } from '@/libs/fontawesome'
import type { Kebab } from '../helpers'
import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type FWAvailableIcons = Kebab<keyof typeof ICONS>
type FWIconType = 'fas' | 'far' | 'fab'
type FWIconProp = [FWIconType, FWAvailableIcons]
type FontAwesomeProps = InstanceType<typeof FontAwesomeIcon>['$props']

export interface AppIconProps extends FontAwesomeProps {
  icon: FWIconProp
}

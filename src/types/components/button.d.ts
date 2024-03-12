import type { AppIconProps } from '.'

export interface AppButtonProps {
  /** algo a mais */
  label?: string

  icon?: AppIconProps['icon']
  iconRight?: AppButtonProps['icon']
  loading?: boolean
  disabled?: boolean
}

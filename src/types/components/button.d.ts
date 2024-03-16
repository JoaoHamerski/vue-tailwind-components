import type { AppIconProps } from '.'
import type { SIZES_CLASS } from '@/components/button/constants'

export interface AppButtonProps {
  label?: string
  icon?: AppIconProps['icon']
  iconRight?: AppButtonProps['icon']
  loading?: boolean
  disabled?: boolean
  rounded?: boolean
  size?: keyof typeof SIZES_CLASS
  circle?: boolean
}

export type ButtonLabelProps = Pick<AppButtonProps, 'icon' | 'label' | 'iconRight' | 'size'>

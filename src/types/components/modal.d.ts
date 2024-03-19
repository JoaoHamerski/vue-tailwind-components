import type { MODAL_SIZES_CLASS } from '@/components/modal/constants'
export interface AppModalProps {
  size?: keyof typeof MODAL_SIZES_CLASS
  show: boolean
  noPadding?: boolean
  hideCloseBtn?: boolean
}

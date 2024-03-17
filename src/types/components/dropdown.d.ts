import type { DROPDOWN_ALIGN_CLASS } from '@/components/dropdown/constants'
import type { Component } from 'vue'

type DropdownAlignOption = keyof typeof DROPDOWN_ALIGN_CLASS

export interface AppDropdownProps {
  label?: string
  labelClass?: string
  align?: DropdownAlignOption
  options?: DropdownOption[]
  optionsAs?: Component | string
  dropdownWidth?: string
}

export type DropdownTriggerProps = Pick<AppDropdownProps, 'label' | 'labelClass'>
export type DropdownOptionsProps = Pick<
  AppDropdownProps,
  'options' | 'optionsAs' | 'align' | 'dropdownWidth'
>

export type DropdownOption = {
  id?: string | number
  label: string
  icon?: string
  separator?: boolean
}

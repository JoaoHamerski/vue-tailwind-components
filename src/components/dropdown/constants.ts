type DropdownAlignmentTypes = 'tr' | 'tl' | 'br' | 'bl' | 'l' | 'r'
type DropdownAlignmentClass = Record<DropdownAlignmentTypes, any>
type DropdownAlignmentTransition = Record<DropdownAlignmentTypes, { to: any; from: any }>

export const DROPDOWN_ALIGN_CLASS: DropdownAlignmentClass = {
  br: 'dropdown-bottom',
  bl: 'dropdown-end dropdown-bottom',
  tl: 'dropdown-top dropdown-end',
  tr: 'dropdown-top',
  l: 'dropdown-left',
  r: 'dropdown-right'
}

export const DROPDOWN_TRANSITION_CLASS: DropdownAlignmentTransition = {
  br: { from: 'translate-y-2', to: 'translate-y-0' },
  bl: { from: 'translate-y-2', to: 'translate-y-0' },
  tl: { from: '-translate-y-2', to: 'translate-y-0' },
  tr: { from: '-translate-y-2', to: 'translate-y-0' },
  l: { from: '-translate-x-2', to: 'translate-x-0' },
  r: { from: 'translate-x-2', to: 'translate-x-0' }
}

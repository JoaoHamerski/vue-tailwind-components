export const DEFAULT_THEME = 'light'

export default {
  theme: {
    name: 'Theme',
    description: 'Change the current theme',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'side-by-side', title: 'Side by side' }
      ],
      dynamicTitle: true
    }
  }
}

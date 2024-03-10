export default {
  theme: {
    name: 'Toggle theme',
    description: 'Change the theme',
    defaultValue: 'light',
    toolbar: {
      items: [
        { value: 'dark', title: 'Dark', icon: 'circle' },
        { value: 'light', title: 'Light', icon: 'circlehollow' }
      ],
      showName: true,
      dynamicTitle: false
    }
  }
}

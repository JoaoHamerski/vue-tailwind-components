export default function (story, context) {
  const storybookIframe = document.querySelector('html')
  const theme = context.globals.theme

  storybookIframe.setAttribute('data-theme', theme)

  return {
    components: { story },
    template: `<story />`
  }
}

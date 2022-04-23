import { App, Plugin } from 'vue'
import { ButtonPlugin } from './Button'

const DPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  }
}

export default DPlugin

export * from './button'

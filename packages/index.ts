import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'
import { MessagePlugin } from './Message'
import { TestPlugin } from './Test'

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    MessagePlugin.install?.(app)
    TestPlugin.install?.(app)
  }
}

export default MYKitPlugin

export * from './Button'
export * from './Message'
export * from './Test'

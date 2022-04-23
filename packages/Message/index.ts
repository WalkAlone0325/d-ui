import { App, Plugin } from 'vue'
import Message from './src/index.vue'

export const MessagePlugin: Plugin = {
  install(app: App) {
    app.component('d-message', Message)
  }
}

export { Message }

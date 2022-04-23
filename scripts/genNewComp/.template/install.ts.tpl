import { App, Plugin } from 'vue'

{{ importPlugins }}

const DUiPlugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  }
}

export default DUiPlugin

{{ exportPlugins }}
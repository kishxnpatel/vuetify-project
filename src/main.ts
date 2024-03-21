// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Plugins


import { registerPlugins } from '@/plugins'
// Routers
import router from './router'

const app = createApp(App).use(router)
registerPlugins(app)
// App Mount
app.mount('#app')

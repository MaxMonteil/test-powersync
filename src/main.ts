import { createApp } from 'vue'
import App from './App.vue'
import { powerSyncPlugin } from './plugins/powerSync'

const app = createApp(App)

app.use(powerSyncPlugin)
app.mount('#app')

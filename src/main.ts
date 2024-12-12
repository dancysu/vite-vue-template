import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
import elementPlusIcons from '@components/icon'

const instance = () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(elementPlusIcons)
  return app
}

instance().mount('#app')

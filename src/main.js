import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js' // index.js 는 './routes' 로 생략 가능
import store from './store/index.js'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
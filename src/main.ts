import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {registerComponents} from '@/components/registerComponents'
import './validation/validation'

const app = createApp(App)
    .use(store)
    .use(router)

registerComponents(app)

app.mount('#app')

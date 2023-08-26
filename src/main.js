import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/styles/main.css'
import './assets/styles/style.scss' // have to load sass loader to import scss. npm install -D sass-loader@^10 sass

const app = createApp(App)
// This allows us to use the router-link (button links) and router-view (placeholder that is replaced with components in the router folder) custom component
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import { setConfig } from 'shadow-play' 
import App from './App.vue'
import './index.scss'

setConfig({backendURL: 'http://localhost:3001'})
createApp(App).mount('#app')

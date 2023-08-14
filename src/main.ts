import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
  const scriptUrl = process.env.DEV ? './service-worker.js' : 'service-worker.js'
  navigator.serviceWorker.register(scriptUrl)
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      })
}

createApp(App).mount('#app')

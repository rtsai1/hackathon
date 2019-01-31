import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

// Global CSS across app
import '@styles/global.scss'

Vue.config.productionTip = false

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

export const eventBus = new Vue()

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.dispatch('getMemberInfo')
  },
  render: h => h(App)
}).$mount('#app')

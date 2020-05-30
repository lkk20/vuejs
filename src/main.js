import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
	store,
  render: h => h(App)
}).$mount('#app')


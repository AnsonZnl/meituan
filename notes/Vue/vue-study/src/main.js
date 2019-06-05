import Vue from 'vue'
import router from './router'
// import store from './store'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
  router,
  store
}).$mount('#app')

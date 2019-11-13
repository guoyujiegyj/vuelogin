import Vue from 'vue'
import './plugins/axios'
import './cube-ui'

import App from './App.vue'
import router from './router'
import store from './store'
// 导入拦截模块
import interseptor from '../interseptor'
Vue.config.productionTip = false

// 调用拦截器方法。
interseptor()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// hehe 组价全局注册
import hehe from './hehe/index.js'
Vue.use(hehe)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

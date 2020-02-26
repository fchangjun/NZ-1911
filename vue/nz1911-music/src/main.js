import Vue from 'vue'
import App from './App.vue'
import './style/reset.css'
// 引入样式重置文件
import router from './router'
import axios from  './utils/axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios 
// 将 axios 挂载到vue的原型上  组件继承实例,所以vue原型上的属性组件也有
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

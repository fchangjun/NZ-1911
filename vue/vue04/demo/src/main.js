import Vue from 'vue'
import App from './App.vue'
// 引入组件 单文件组件
Vue.config.productionTip = false

// 创建一个实例 将实例和#app 进行关联 渲染第一个组件app组件
new Vue({
  render: h => h(App)
}).$mount('#app')
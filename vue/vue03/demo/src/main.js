import Vue from 'vue'
// 引入vue的对象  <script src='./vue.js'>
import App from './hehe.vue'
// 引入组件

// 创建实例 挂载app组件
new Vue({
  render: h => h(App)
}).$mount('#app')

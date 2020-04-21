import Vue from 'vue'
Vue.prototype.$bug = (str)=>{
  console.log('$bug:',str)
}
// 创建一个自定义插件并且注册到实例上
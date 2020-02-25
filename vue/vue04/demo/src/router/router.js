import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入相关的文件并且使用
Vue.use(VueRouter)

//引入要使用的组件
import son1 from './son1'
import son2 from './son2'
// 创建一个路由对象
let router = new VueRouter({
  mode:'hash',// 'history',
  routes:[
    {
       path:'/son1', //地址栏的path 
       component:son1//组件   如果地址栏变成son1 渲染son1组件
    },
    {
      path:'/son2',
      component:son2
    }
  ]
})

export default router
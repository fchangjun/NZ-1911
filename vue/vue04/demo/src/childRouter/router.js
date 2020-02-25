import  Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入组件
import Recommend from './recommend'
import Singer from "./singer"
import My from "./my"
import UserInfo from "./userInfo"
import UserLogin from "./userLogin"

let router = new VueRouter({
  routes:[
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer,
      beforeEnter: (to, from, next) => {
        //路由独享守卫
        console.log('歌手守卫')
        next()
      }
    },
    {
      path:'/my',
      component:My,
      children:[
        {
          path:'userinfo',  // "/" 表示的是根路径 在子路由写路径不加第一个/
          component:UserInfo
        },
        {
          path:'userlogin',
          component:UserLogin
        }
      ]
    },
    {
      path:"/",
      redirect:"/recommend"
    }
  ]
})
// 全局前置守卫 所有的路由切换都会触发
// router.beforeEach((to, from, next) => {
//   console.log('from',from)
//   console.log("to",to)
//   let islogin = false 
//   if(to.path==='/singer'){
//     if(islogin){
//       next()
//     }else{
//       next('/my/userlogin')
//     }
//   }else{

//     next()
//   }
// })
//全局后置守卫 跳转完成之后触发
router.afterEach((to, from) => {
  console.log('from',from)
  console.log("to",to)
})
export default router
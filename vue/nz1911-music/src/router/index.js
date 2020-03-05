import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../components/Recommend'
// import Singer from '../components/Singer/index.vue'
// import Rank from '../components/Rank'
// import My from  '../components/My'
// import Detail from 'components/Detail'
// 路由懒加载
const Recommend = ()=>import('../components/Recommend')
const Singer =()=>import('../components/Singer/index.vue')
const Rank =()=>import('../components/Rank')
const My =()=>import('../components/My')
const Detail =()=>import('components/Detail')
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
   {
     name:'a',
     path:'/recommend',
     component:Recommend
   },
   {
    name:'b',
    path:'/singer',
    component:Singer,
    children:[
      {
        path:':singermid',
        name:'detail',
        component:Detail
      }
    ]
    },{
      name:'c',
      path:'/rank',
      component:Rank
    },{
      name:'d',
      path:'/my',
      component:My
    },{
      path:'/',
      redirect:'/recommend'
    }
  ]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend'
import Singer from '../components/Singer/index.vue'
import Rank from '../components/Rank'
import My from  '../components/My'
import Detail from 'components/Detail'
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
   {
     path:'/recommend',
     component:Recommend
   },
   {
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
      path:'/rank',
      component:Rank
    },{
      path:'/my',
      component:My
    },{
      path:'/',
      redirect:'/recommend'
    }
  ]
})

export default router

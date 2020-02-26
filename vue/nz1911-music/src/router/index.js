import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend'
import Singer from '../components/Singer'
import Rank from '../components/Rank'
import My from  '../components/My'
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
   {
     path:'/recommend',
     component:Recommend
   },
   {
    path:'/singer',
    component:Singer
    },{
      path:'/rank',
      component:Rank
    },{
      path:'/my',
      component:My
    }
  ]
})

export default router

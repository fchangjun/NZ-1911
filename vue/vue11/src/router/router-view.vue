<template>
  <div id="app">
    <component :is="componentId"></component>
  </div>
</template>

<script>

import Recommend from "../components/Recommend"
import Singer from  "../components/Singer"
import Rank from "../components/Rank"
export default {
 components:{Recommend,Singer,Rank},
 data(){
   return {
     componentId:'Rank'
   }
 },
 created(){
  // 监听hash 值的改变
   window.addEventListener('hashchange',()=>{
     let hash  = window.location.hash.split('#')[1]
     // 创建路由表
     let routs=[
       {
         path:'/recommend',
         component:'Recommend'
       },
       {
         path:'/singer',
         component:'Singer'
       },
       {
         path:'/rank',
         component:'Rank'
       }
       ]

      //  进行匹配
      routs.map((item,index)=>{
        if(item.path === hash){
          this.componentId= item.component
        }
        return item
      })
     console.log('hash值改变了',hash)
   })
 }
}
</script>

<style>

</style>

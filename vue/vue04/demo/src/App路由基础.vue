<template>
  <div id="app">
     这里是app根组件
     <!-- <banner></banner>
     <box></box>
     <hr> -->
     <!-- 控制地址栏改变
      router-link  默认渲染成a标签 
      to 表示地址栏变成啥样
      tag 可以控制渲染元素
      active-class 激活状态的类名
      -->
     <router-link to='/son1' tag='span' active-class='hehe'>son1</router-link>
     <router-link to='/son2' active-class='hehe' tag='span'>son2</router-link>
     <!-- <router-link :to="{path:'/recommend'}" active-class='hehe' tag='span'>推荐</router-link> -->
     <router-link :to="{name:'hehe'}" active-class='hehe' tag='span'>推荐</router-link>
     <router-link to='/namerouter' active-class='hehe' tag='span'>命名视图</router-link>
     <!-- 站位的作用 根据地址栏渲染不同的组件 -->
     <hr>
     <!-- 命名视图 给视图起一个名字 -->
     <router-view></router-view>
     <router-view name='a'></router-view>
     <router-view name='b'></router-view>
    
  </div>
</template>

<script>
// 引入一个组件
import banner from './Banner'
// import box from './todolist/Box'
import box from './is/Box'
export default {
  //  注册组件
   components:{banner,box}
}
</script>

<style>
.hehe{
  color:lightgreen;
}
</style>

<template>
  <div id="app">
     这里是app根组件
     <banner></banner>
     <box></box>
     <hr>
  </div>
</template>

<script>
// 引入一个组件
import banner from './Banner'
import box from './todolist/Box'
export default {
  //  注册组件
   components:{banner,box}
}
</script>

<style>

</style>

<template>
  <div id="app">
    <h1>Vue  复习</h1>
    <img src="/favicon.ico" alt="">
    <img :src="pubicPath" alt="">
    <hr/>
    <img src="./assets/logo.png" alt="">
    <img :src="assetPath" alt="">
  </div>
</template>
<script>
import path from './assets/logo.png'
export default {
  data(){
    return{
      pubicPath:'/favicon.ico',
      assetPath:path
    }
  }
}
</script>
<style lang="less">



</style>

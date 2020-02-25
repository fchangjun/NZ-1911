<template>
  <div id="app">
    <router-link to ='/recommend' active-class='hehe'>推荐</router-link>
    <router-link to ='/singer' active-class='hehe'>歌手</router-link>
    <router-link to ='/my' active-class='hehe'>我的</router-link>
    <!-- 显示的是一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.hehe{
  color:lightgreen;
}
</style>

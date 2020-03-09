<template>
  <div id="app">
    <router-link to='/recommend' >推荐</router-link>
    <router-link to='/singer' >歌手</router-link>
    <router-link to='/rank' >排行</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import RouterView from  './router/router-view'
import RouterLink from './router/router-link'

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
  <demo></demo>
   <hehe></hehe>
  </div>
</template>

<script>
import  demo from  './components/demo'

export default {
  name: 'App',
  components: {
    demo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

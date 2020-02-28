<template>
  <div id="app">
    <h3>根组件</h3>
    <box></box>
  </div>
</template>

<script>

// import Box from  './todolist/Box'
import Box from  './vuexdemo/Box'
export default {
  name: 'App',
  components:{Box}

}
</script>

<style>

</style>

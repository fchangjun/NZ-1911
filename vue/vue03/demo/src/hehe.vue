<template>
  <div class='test'>
     这里是呵呵组件{{name}}
     <button @click="add">add</button>
  </div>
</template>
<script>
// Vue.componet('组件名',配置项)
// 抛出一个组件的配置项
export default {
  data () {
    return {
      name: '123'
    }
  },
  methods: {
    add () {
      this.name = '韩梅梅'
    }
  }
}
</script>
<style >
  .test{
    background: red;
    width: 100px;
    height: 100px;
  }
</style>

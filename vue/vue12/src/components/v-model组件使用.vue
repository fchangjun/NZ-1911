<template>
  <div class="hello">
    <h3>V-mode 组件使用</h3>
    {{name}}
    <hr>
    <son v-model="name"></son>
    <!-- 
      在组件上使用v-model 
      相当于提供了一个叫 value 的自定义属性 props 
      一个叫input的自定义事件 emit
     -->
  </div>
</template>

<script>
import son from  './son'
export default {
  components:{son},
  data(){
    return  {
    name:'韩梅梅'
  }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

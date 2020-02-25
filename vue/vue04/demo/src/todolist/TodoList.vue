<template>
  <div>
    <ul>
      <li 
      :class='item.state?"blue":"red"'
      v-for='(item,index) in list' 
      :key='index'>
      {{item.msg}}
      <button @click='itemDel(index)'>del</button>
       <span v-if='item.state'>已完成</span>
       <button v-else @click="itemFinish(index)">待完成</button>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
 props:{list:{type:Array,default:[]}},
 methods: {
   itemDel(index){
     this.$emit('del',index)
   },
   itemFinish(index){
     this.$emit('update',index)
   }
 },
}
</script>
<style >
  .red{
    background: red;
  }
  .blue{
    background: blue;
  }
</style>
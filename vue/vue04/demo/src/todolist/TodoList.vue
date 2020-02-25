<template>
  <div>
    <ul>
      <li 
      v-for='(item,index) in list' 
      :key='index'>
      {{item.msg}}</li>
    </ul>
  </div>
</template>
<script>

export default {
 props:{list:{type:Array,default:[]}}
}
</script>
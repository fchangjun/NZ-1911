
<template>
  <div>
      <span @click='change(0)'>全部</span>
      <span @click='change(1)'>已完成</span>
      <span @click='change(2)'>未完成</span>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
 methods:{
   ...mapMutations(['todolist/changeAll']),
   change(index){
     this['todolist/changeAll'](index)
   }
 }
}
</script>
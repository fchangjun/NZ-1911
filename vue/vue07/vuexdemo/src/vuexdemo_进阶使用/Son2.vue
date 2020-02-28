<template>
  <div>
     <h4>子组件2</h4>
     name:{{this.$store.state.name}}
     <button @click='change'>组件2 改名</button>
  </div>
</template>
<script>
import {mapActions,mapMutations} from 'vuex'
export default {
  methods:{
    ...mapActions(['changeNameAction']),
    ...mapMutations(['changeName']),
    change(){
      // setTimeout(() => {
      //   this.$store.commit('changeName',{name:'伽椰子'})
      // }, 1000);
      // 完整的写法
      // this.$store.dispatch('changeNameAction',{name:'伽椰子'})
      // 辅助函数调用action 
      // this.changeNameAction({name:'伽椰子'})
      // 辅助函数mutation的调用方式
      this.changeName({name:'伽椰子'})
    }
  }
}
</script>
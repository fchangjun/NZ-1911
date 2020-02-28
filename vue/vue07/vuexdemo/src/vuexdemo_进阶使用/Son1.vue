<template>
  <div>
     <h4>子组件1</h4>
     name:{{this.$store.state.name}}
     mapState:{{name}}{{age}}{{sex}}
     <hr>
     getters:{{this.$store.getters.double}}
     mapGetters:{{double}}
    <button @click='change'>组件1 改名</button>

  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
//mapState 将state值映射到计算属性
//mapGetters 将getters映射到计算属性
export default {
  computed:{
    ...mapState(['name','age','sex']),
    ...mapGetters(['double'])
  },
  data(){
    return{
      hehe:123
    }
  },
  methods:{
    change(){
      // setTimeout(() => {
      //    this.$store.commit('changeName',{name:'贞子'})
      // }, 1000);
      this.$store.dispatch('changeNameAction',{name:'贞子'})
     
    }
  }
}
</script>
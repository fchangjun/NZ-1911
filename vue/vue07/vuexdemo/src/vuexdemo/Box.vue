
<template>
  <div>
     <h4>这里是盒子组件 </h4>
        {{name}}
        <hr>
        <!-- {{double}} -->
        {{xixi}}
        <hr>
        <button @click='heihei'>改名</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

// hehe 映射到计算属性里的值
// state.name  全局状态管理的值
// 对象可以改名数组不能改名
export default {
  // 不适用拓展运算符
  // computed:mapState({name:state=>state.name})
  computed:{
    // ...mapState(['name'])
    // ...mapState({hehe:(state)=>{ 
    //   return state.name
    // }})
    // ...mapState({hehe:state=>state.name})
    ...mapState({name:state=>state.name}),
    // getters的映射
    // ...mapGetters(['double']),
    // ...mapGetters({double:'double'})
    ...mapGetters({xixi:'double'})
  },
  methods:{
    // ...mapMutations(['changeName'])
    // ...mapMutations({changeName:'changeName'})
    ...mapMutations({heihei:'changeName'})
  }
}
</script>
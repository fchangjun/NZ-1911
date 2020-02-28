<template>
  <div>
     <h4>子组件2</h4>
     name:{{this.$store.state.name}}
     <button @click='change'>改名</button>
    <br>
     age:{{this.$store.state.age}}
  </div>
</template>
<script>
export default {
  methods: {
    change(){
      // 通过commit方法触发mutation 
      // 参数1 要触发的方法名
      // 参数2 是要传递的数据
      this.$store.commit('changeName',{name:123,pass:456})
    }
  },
   mounted() {
    console.log('组件2',this) 
   }
}
</script>
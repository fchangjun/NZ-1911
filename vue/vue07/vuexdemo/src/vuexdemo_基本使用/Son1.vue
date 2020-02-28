<template>
  <div>
     <h4>子组件1</h4>
     name:{{this.$store.state.name}}
     <br>
     age:{{this.$store.state.age}}
     <button @click='change'>改年龄</button>
  </div>
</template>
<script>
export default {
  methods: {
    change(){
      // dispatch 用来触发acition里的函数
      this.$store.dispatch('changeAgeAction',{age:777})
    }
  },
}
</script>
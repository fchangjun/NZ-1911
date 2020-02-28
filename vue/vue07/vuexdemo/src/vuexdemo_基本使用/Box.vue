
<template>
  <div>
     <h4>这里是盒子组件 {{this.$store.state.name}}</h4>
     getters:{{this.$store.getters.double}}
     <son1></son1>
     <hr>
     <son2></son2>
  </div>
</template>
<script>
import Son1 from './Son1'
import Son2 from './Son2'
export default {
  name:'Box',
  components:{Son1,Son2},
  mounted() {
    console.log(this.$store.state.name)
  },
}
</script>
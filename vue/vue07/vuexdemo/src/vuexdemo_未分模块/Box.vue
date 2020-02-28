
<template>
  <div>
     <h4>这里是盒子组件 </h4>
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
}
</script>
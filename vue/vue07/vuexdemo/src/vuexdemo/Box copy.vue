
<template>
  <div>
     <h4>这里是盒子组件 </h4>
     {{name}}{{age}}
     <button @click="changeName">改名</button>
      <button @click="changeAge">改年龄</button>
     <!-- <son1></son1> -->
     <hr>
     <!-- <son2></son2> -->
  </div>
</template>
<script>
import Son1 from './Son1'
import Son2 from './Son2'
import { mapState, mapMutations } from 'vuex'
export default {
  name:'Box',
  computed:{
    ...mapState({
      name:state=>state.hehe.name,
      age:state=>state.xixi.age
    })
  },
  components:{Son1,Son2},
  methods:{
    ...mapMutations(['changeAge','changeName'])
  },
  mounted(){
    console.log(this)
  }
}
</script>
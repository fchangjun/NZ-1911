
<template>
  <div>
     <input type="text" placeholder="请输入代办事项" v-model='inputValue'>
     <button @click='add'>add</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    ...mapMutations(['todolist/addList']),
    add(){
      console.log('add')
      // this.addlist/addlist()
      this['todolist/addList']({msg:this.inputValue})
    }
  }
}
</script>
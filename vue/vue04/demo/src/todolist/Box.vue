<template>
  <div>
     <H4>todolist </H4>
     <todoinput @add='add'></todoinput>
     <todolist 
     :list='list'
     @del='del'
     @update='update'
     ></todolist>
  </div>
</template>
<script>
/*
  box 容器组件
  list 组件 代办事项列表
  input 组件 输入组件
*/ 
import todolist from './TodoList'
import todoinput from './TodoInput'
export default {
  components:{todolist,todoinput},
  data(){
    return{
      list:[
        {msg:'今晚打老虎',state:false},
        {msg:'明天继续打',state:true}
      ]
    }
  },
  methods: {
    add(msg){
      this.list.push({msg:msg,state:false})
    },
    del(index){
      this.list.splice(index,1)
    },
    update(index){
      this.list[index].state=true
    }
  },
}
</script>
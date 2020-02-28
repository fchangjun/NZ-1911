
<template>
  <div>

     <ul>
       <li 
       :class='item.finish?"green":"red"'
       :key='index'
       v-for='(item,index) in showlist'>
         {{item.msg}}
         <button @click='del(index)'>删除</button>
         <span v-if='item.finish'>已完成</span>
         <button v-else @click='update(index)'>完成</button>
       </li>
     </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  computed:{
    // ...mapState(['list'])
    // ...mapState({list:state=>state.list})
    ...mapState({list:state=>state.todolist.list}),
    // 映射全局状态值到计算属性 注意模块化多了一级模块名
    ...mapGetters({showlist:'todolist/showList'})
  },
  methods:{
    //将mutation 映射到方法里 注意 命名空间的使用
    ...mapMutations(['todolist/delList','todolist/updateList']),
    del(index){
      console.log('删除')
      // 直接调用删除的方法
      this['todolist/delList'](index) 
    },
    update(index){
      this['todolist/updateList']({index})
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>
<style >
  .red{
    background: red;
  }
  .green{
    background: lightgreen;
  }
</style>
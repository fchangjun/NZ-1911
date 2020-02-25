<template>
  <div>
     <H4>动态组件 </H4>
     <!-- <span class='test1' :is='state?"son1":"son2"'>

     </span> -->
      <component :is='arr[index]'/>
     <button @click='toggle'>toggle</button>
  </div>
</template>s
<script>
/*
动态组件 is 属性 可以指定渲染某一个组件 
使用is属性的标签不会被渲染
为了语义化 一般使用vue提供的component标签
*/ 
import son1 from './Son1'
import son2 from './Son2'
export default {
  components:{son1,son2},
  data(){
    return{
      state:true,
      arr:['son1','son2'],
      index:0
    }
  },
  methods: {
    toggle(){
      this.state=!this.state
    }
    
  }
}
</script>
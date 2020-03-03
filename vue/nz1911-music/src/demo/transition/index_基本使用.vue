
<template lang="">
  <div>
    <h3>动画案例</h3>
    <transition-group name='hehe'>
       <div key = 1 class='test2' v-if='show'></div> 
       <div key = 2 class='test1' v-if='show'></div> 
    </transition-group>
    <button @click='toggle'>toggle</button>
  </div>
</template>
<script>
/*
过度使用 
在某一个元素或者多个元素进入或者离开页面 添加动画
1.在该元素的外部添加 transition 标签 
2.多个元素添加  transition-group 每一个子元素需要key
3.通过name属性添加名字
4.在样式里添加过度样式 
5. 进入 name-enter  name-enter-to  name-enter-active
6. 进入 name-leave  name-leave-to  name-leave-active
*/ 
export default {
   data(){
     return{
       show:true
     }
   },
   methods:{
     toggle(){
       this.show=!this.show
     }
   }
}
</script>
<style >
  .test1{
    background: red;
    width: 100px;
    height: 100px;
  }
  .test2{
    background: green;
    width: 100px;
    height: 100px;
  }
  .hehe-enter{
    opacity: 0;
  }
  .hehe-enter-to{
    opacity: 1;
  }
  .hehe-enter-active{
    transition: all 3s;
  }
  .hehe-leave{
    opacity: 1;
  }
  .hehe-leave-to{
    opacity: 0;
  }
  .hehe-leave-active{
    transition: all 3s;
  }
</style>
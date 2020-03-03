<template lang="">
  <div>
    <h3>动画案例</h3>
    <transition
      enter-active-class='bounceInDown animated'
      leave-active-class='slideOutRight animated'
    >
       <div key = 1 class='test2' v-if='show'></div> 
    </transition>
    <button @click='toggle'>toggle</button>
  </div>
</template>
<script>
/*
第三方动画库的使用
1. 下载安装引入 animate.css
2. 在目标元素外部添加  过度标签
3. enter-active-class leave-active-class 进入离开使用的动画
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
  
</style>
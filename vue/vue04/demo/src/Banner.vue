<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item,index) in list' :key='index'>{{item}}</div>
        
    </div>
  </div>
</template>

<script>
// 引入安装的第三方模块
import Swiper from 'swiper'
export default {
  data(){
    return {
      list:[]
    }
  },
  methods: {
    initBanner(){
        var mySwiper = new Swiper ('.swiper-container', {}) 
    }
  },
  created() {
    setTimeout(()=>{
      this.list=[1,2,3]
      this.$nextTick(()=>{

        this.initBanner() 
      })
    },1000)
  },
  mounted() {
   
  }
}
</script>

<style >
/* 引入模块的css */
@import '~swiper/css/swiper.min.css';
  .swiper-container {
    width: 600px;
    height: 300px;
    background: red;
}  
</style>
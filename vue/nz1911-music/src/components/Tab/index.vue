<template>
  <div class='tab'>
     <router-link to='/recommend' tag='div' active-class="sel"> 
      <span>推荐</span>
     </router-link>
     <router-link to='/singer' tag='div' active-class="sel"> 
      <span>歌手</span>
     </router-link>
     <router-link to='/rank' tag='div' active-class="sel"> 
      <span>排行</span>
     </router-link>
     <router-link to='/my' tag='div' active-class="sel"> 
      <span>我的</span>
     </router-link>
  </div>
</template>
<style lang="less" scoped>
@import '../../style/index.less';
.tab{
  .w(375);
  height: 44px;
  display: flex;
  div{
    text-align: center;
    line-height: 44px;
    // background: pink;
    width: 25%;
    font-size: @fs-s;
    color: rgba(255,255,255,0.5);
    span{
      height: 38px;
    
      display: inline-block; 
      border-bottom: 2px solid @black2;
    }
   
  }
  .sel{
    color: @yellow;
    span{
      border-bottom: 2px solid @yellow;
    }
  }
}  
</style>
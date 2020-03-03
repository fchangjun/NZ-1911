<template>
  <div class='player' v-if='songList.length'>
    <div v-if='fullScreen' class='big'>
    <!-- 头部 -->
     <div> 
       <span @click='changeScreen(false)'>v</span>
       {{currentSong.songname}}
     </div>
     <!-- 歌手 -->
     <p>{{currentSong.singer[0].name}}</p>
     <!-- 专辑图片 -->
     <div class='img'>
       <img :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 播放 -->
     <button>播放</button>
    </div>
    <div v-else 
    class='small'
    @click='changeScreen(true)'
    >
      小屏
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['songList','fullScreen']),
    ...mapGetters(['currentSong'])
  },
  methods:{
    ...mapMutations(['changeScreen'])
  }  
}
/*
1.处理数据 
2.显示数据渲染界面 name 歌手 专辑图片
3.专辑图片能动
4.显示歌词 
5.控制器 前一曲 后一曲 循环模式  播放 收藏
6.进度条  
  a.随着时间动
  b.可以点击控制歌曲播放
  c.可以拖动控制歌曲的播放
 
*/ 
</script>
<style lang="less" scoped>
@import '~style/index.less';
.player{
  .big{
    position: fixed;
    top:0px;
    bottom: 0px;
    left:0;
    right:0;
    background: lightgreen;
    .img{
      text-align: center;
      // background: red;
      .w(375);
      .h(300);
      img{
          width: 75%;
          border-radius:50%;
          border: 10px solid #ccc; 
      }
    }
  }
  .small{
    position: fixed;
    .w(375);
    bottom: 0px;
    height: 80px;
    background: lightgreen
  }
  .rotate{
    transform: rotate(360);
  }
}  
</style>
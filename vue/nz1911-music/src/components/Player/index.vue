<template>
  <div class='player' v-if='songList.length'>
    <div v-if='fullScreen' class='big'>
    <!-- 头部 -->
     <div class='top'> 
       <span @click='changeScreen(false)'>v</span>
       {{currentSong.songname}}
     </div>
     <!-- 背景 -->
     <div class='bg'>
       <img :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 歌手 -->
     <p class='name'>{{currentSong.singer[0].name}}</p>
     <!-- 专辑图片 -->
     <div class='img'>
       <img :class='cd' :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 播放 -->
     <button @click='togglePlay'>播放</button>
     <button @click='next'>下一曲</button>
     <!-- 播放器 -->
     <audio ref='audio' 
            @canplay='canplay'
            controls :src='currentSong.audioUrl'></audio>
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
  data(){
    return{
      play:false
    }
  },
  computed:{
    ...mapState(['songList','fullScreen']),
    ...mapGetters(['currentSong']),
    cd(){
      return this.play?'cd':'cd paused'
    }
  },
  methods:{
    ...mapMutations(['changeScreen','nextCurrendIndex']),
    togglePlay(){
      this.play=!this.play
    },
    canplay(){
      // 歌曲可以播放 
      this.audio = this.$refs.audio 
      console.log('可以播放了')
      console.log(this.audio.__proto__)
    },
    next(){
      //下一曲 
      this.nextCurrendIndex()
    }
  },
  watch:{
    play(newValue,oldValue){
      if(!this.audio) return false 
      if(newValue){
        this.audio.play()
      }else{
        this.audio.pause()
      }
    }
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
  color: #fff;
  .big{
    position: fixed;
    top:0px;
    bottom: 0px;
    left:0;
    right:0;
    background: #222;
    .top{
      font-size: @fs-l;
      text-align: center
    }
    .name{
      font-size: @fs-s;
      text-align: center;
      padding: 10px;
    }
    .bg{
      position: absolute;
      z-index: -9;
      top: 0px;
      width: 100%;
      height: 100%;
      filter: blur(15px);
      img{
         width: 100%;
         height: 100%;
      }
    }
    .img{
    
      text-align: center;
      // background: red;
      .w(375);
      padding: 20px;
      box-sizing: border-box;
      img{
          width: 85%;
          border-radius:50%;
          border: 10px solid #ccc; 
      }
      & .cd{
        animation: rotate 10s linear infinite;
      }
      & .paused{
        animation-play-state: paused;
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
  @keyframes rotate {
    0% {
     transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
}  
</style>
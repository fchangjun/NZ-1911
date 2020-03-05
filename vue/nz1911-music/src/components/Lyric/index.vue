<template>
  <div class='lyric'>
     {{txt}}
  </div>
</template>
<script>
import {getLyricByMid} from 'api/api.js'
import Lyric from "lyric-parser"
import {Base64 } from 'js-base64'
import { mapState, mapGetters } from 'vuex'
export default {
  data(){
    return{
      txt:'暂无歌词'
    }
  },
  props:['play','seekTime'],
  computed:{
    ...mapGetters(['currentSong'])
  },
  methods:{
    getLryic(songmid){
      getLyricByMid(songmid).then((res)=>{
        // 解析歌词
        let lyricString =Base64.decode(res.lyric)
        // 如果之前有播放对象将播放停掉
        if(this.lyricObj){
          this.lyricObj.stop()
        }
        this.lyricObj = new Lyric(lyricString,({txt})=>{
          console.log(txt)
          this.txt = txt 
        })
        //解析完毕直接播放
          this.lyricObj.play()
      })
    }
  },
  watch:{
    seekTime(newTime,oldTime){
      // 发生改变说明 歌曲快进 歌词也要快进
       if(!this.lyricObj) return false 
       this.lyricObj.seek(newTime*1000)
    },
    play(newPlay,oldPlay){
      if(!this.lyricObj) return false 
      console.log('歌词播放状态',newPlay)
      this.lyricObj.togglePlay()
    },
    currentSong(newSong,oldSong){
      let {songmid} = newSong
      this.getLryic(songmid,1)
    }
  },
  mounted(){
  // 歌词组件挂载 第一播放歌曲
  let {songmid} = this.currentSong
  this.getLryic(songmid,0)
  }
}
/*
1.通过网路请求获取歌词 base64  Lyric 
2. 播放  play  
   a. 第一进入播放器组件  mounted
   b. 切歌   currentSong 监听
   c. 手动的停止开启  监听play 
3. 停止  stop  togglePlay
4. 跳转  seek 
*/ 
</script>
<style lang="less" scoped>
@import '~style/index.less';
.lyric{
  font-size: @fs-s;
}
</style>
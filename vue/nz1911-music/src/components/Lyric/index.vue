<template>
  <div class='lyric'>
     {{text}}
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
      text:'暂无歌词'
    }
  },
  props:['startTime','play'],
  computed:{
    ...mapGetters(['currentSong']),
    ...mapState(['currentIndex'])
  },
  watch:{
    currentIndex(){
      console.log('下标发生改变')
    },
    play(newValue,oldValue){
      console.log('歌词的播放状态',newValue, this.lyricObj)
      if(this.lyricObj){
        this.lyricObj.togglePlay()
      }
    },
    startTime(newValue,oldValue){
      console.log('时间改变')
      // if(!this.lyricObj) return false 
      // // console.log(newValue)
      // this.lyricObj.seek(newValue*1000)
    },
    
    currentSong(newData,oldData){
      console.log('歌曲变了')
      let {songmid}=newData
      this.getLyric(songmid)
    },
   
  },
  methods:{
    getLyric(songmid){
      getLyricByMid(songmid).then((data)=>{
        // 使用base64解码歌词
        let  decode=Base64.decode(data.lyric)
       if(this.lyricObj){
        //  将之前的歌词播放停止
         this.lyricObj.stop()
         this.lyricObj=null
       }
        this.lyricObj = new Lyric(decode,({txt})=>{
            // console.log(txt)
             console.log(txt)
             this.text=txt
             
        })
        this.lyricObj.play()
        // console.log(lyricObj)
      })
    },
  },
   mounted() {
      let {songmid}=this.currentSong

      this.getLyric(songmid)
    }, 
}
</script>
<style lang="less" scoped>
@import '~style/index.less';

</style>
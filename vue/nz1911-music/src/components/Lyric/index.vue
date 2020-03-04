<template>
  <div class='lyric'>
     这里是歌词组件
  </div>
</template>
<script>
import {getLyricByMid} from 'api/api.js'
import { mapState, mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['currentSong'])
  },
  watch:{
    currentSong(newData,oldData){
      let {songmid}=newData
      console.log('歌曲mid',songmid,getLyricByMid)
      getLyricByMid(songmid).then((data)=>{
        console.log(data)
      })
    }
  },
  methods:{

  }  
}
</script>
<style lang="less" scoped>
@import '~style/index.less';

</style>
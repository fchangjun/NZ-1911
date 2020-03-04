<template>
  <div class='progress'>
     <span>{{startTime|handleTime}}</span>
     <div class='wrapper'>
       <div class='content' ref='content'></div>
       <div class='dot'>
         <div class='red'>

         </div>
       </div>
     </div>
     <span>{{endTime|handleTime}}</span>
     <!-- <button @click='jump'>跳转</button> -->
  </div>
</template>
<script>
export default {
  methods:{
    jump(){
      console.log(222)
      // 调用父组件的方法控制播放时间
      this.$emit('seekFa',77)
    }
  },
  props:{
    startTime:{type:Number,default:0},
    endTime:{type:Number,default:0}
  },
  filters:{
    handleTime(data){
      let time = parseInt(data)
      let m =parseInt(time/60)
      //秒数  01 02 11
      let s =time%60
      s=s<=9?`0${s}`:s
      return  m+':'+s
    }
  },
  watch:{
    startTime(newValue,oldValue){
      // 当前播放时间所占的百分比
      let precent = (this.startTime/this.endTime)*100 
      // 控制进度条长度变化
      console.log(precent)
      this.$refs.content.style.width = precent+'%'

    }
  }
}
/*
1. 显示开始时间 显示结束时间 v
2. 时间随着歌曲的播放改变 v
3. 进度条改变 v
4. 进度条可以点击控制歌曲
5. 进度条可以拖动控制歌曲
*/
</script>
<style lang="less" scoped>
@import '~style/index.less';
.progress{
  .w(375);
  height: 30px;
  // background: red;
  display: flex;
  font-size: @fs-s;
  align-items: center;
  justify-content: center;
  span{
    display: inline-block;
    // background: red;
    width: 30px;
  }
  .wrapper{
    margin: 0px 10px;
    .w(270);
    height: 4px;
    background: rgba(0,0,0,.3);
    position: relative;
    .content{
      height: 4px;
      width: 0%;
      background: @yellow;
    }
    .dot{
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius:50%; 
      position: absolute;
      top: -6px;
 
      .red{
        position: absolute;
        top:2px;
        left:2px;
        height: 12px;
        width: 12px;
        background: @yellow;
        border-radius:50%;
      }
    }
  }
}
</style>
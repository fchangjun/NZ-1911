<template>
  <div class='detail'>
    <!-- 头部导航 -->
     <div class='top'>
       <span @click='back'>back</span>
       <span>{{name}}</span>
     </div>
     <!-- 头像 -->
     <div class='avator' 
     :style="{'background-image':`url(${avator})`}" 
     ref='img'
     >
       <div class='shadow'></div>
     </div>
     <!-- 歌曲列表 -->
     <div class='songlist' ref='wrapper'>
        <div class='content'>
          <ul>
            <li v-for='(item,index) in list' :key='index'>
               <h2>{{item.musicData.songname}}</h2>
               <p>{{name}}.{{item.musicData.albumname}}</p>
            </li>
          </ul>
        </div>
     </div>
  </div>
</template>
<script>
import BS from 'better-scroll'
import {getSongByMid} from 'api/api.js'
export default {
  data(){
    return{
      list:[],
      name:'暂无数据',
      avator:''
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    initBs(){
      let img = this.$refs.img
      let imgH= img.clientHeight 
      let wrapper = this.$refs.wrapper
      this.bs = new BS(wrapper,{probeType:3})
      this.bs.on('scroll',({y})=>{
        // 获取图片的元素和高度
        if(y>=0){
          //下拉放大
          let precent =1+(y/imgH)
          img.style.transform=`scale(${precent})`
          img.style.zIndex=1
        }else{
          //向上滚动
          // 没有到顶部 滚动层的层级高
          // 到达顶部额时候 图片的层级高
          if(Math.abs(y)>imgH-40){
            img.style.zIndex=1
            img.style.paddingTop='0%'
            img.style.height='40px'
          }else{ 
             img.style.zIndex=-1
             img.style.paddingTop='70%'
             img.style.height=0
          }
        }
      })
    }
  },
  created(){
    console.log(this.$route) 
    let {singermid} =this.$route.params
    // 根据歌手mid 发起请求获取数据
    getSongByMid(singermid)
    .then((data)=>{
      console.log(data)
      this.list = data.data.list 
      this.name = data.data.singer_name
      this.avator =`https://y.gtimg.cn/music/photo_new/T001R300x300M000${singermid}.jpg?max_age=2592000`
      this.$nextTick(()=>{
        this.initBs()
      })
   })
  }
}
/*
1.显示歌手名 v
2.显示歌手图片 v
3.显示歌单 v
4.返回 v
5.下拉头像放大 v
6.上滑遮住头像 v
7.随机播放
8.点击跳转到播放器页面
*/ 
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.detail{
  position: fixed;
  top: 0px;
  bottom: 0px;
  background: #222;
  left:0px;
  right: 0px;
  // 头部
  .top{
    height: 40px;
    color: #fff;
    position: absolute;
    top:0;
    z-index: 3;
  }
  // 头像
  .avator{
    .w(375);
    padding-top: 70%;
    background-size:cover; 
    position: absolute;
    top: 0px;
    z-index: -1;
    .shadow{
      position: absolute;
      top: 0;
      background: rgba(7,17,27,0.3);
      width: 100%;
      height: 100%;
    }
  }
  // 歌曲列表
  .songlist{
   position: fixed;
   background: #222;
  //  overflow: hidden;
   top:270px;
   bottom: 0px;
   left:0;
   right: 0;
   .content{
     padding: 10px 30px;
     background: #222;
     li{
       font-size: @fs-s;
       color: #fff;
       height: 61px;
       h2{
        height: 20px;
       }
       p{
        margin-top:3px; 
        height:20px ;
       }
     }
   }
  }
}
</style>
<template>
  <div class='detail'>
     这里叫详情页
     <span @click='back'>back</span>
     <span>{{name}}</span>
     <img :src="avator" alt="">
  </div>
</template>
<script>
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
    })
  }
}
/*
1.显示歌手名
2.显示歌手图片
3.显示歌单
4.返回
5.下拉头像放大
6.上滑遮住头像
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
  background: red;
  left:0px;
  right: 0px;
}
</style>
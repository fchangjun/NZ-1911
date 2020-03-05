<template>
  <div class='recommend'>
  <!-- 滚动区域 -->
    <div class='wrapper' ref='wrapper'>
      <div class='content'>
        <!-- 轮播图 -->
        <banner :banners='list'></banner>
        <!-- 歌曲列表 -->
        <div class='title'>歌曲推荐列表</div>
        <ul class='list'>
          <li v-for='(item,index) in recommendList' 
              :key = "index"
          >
             <div class ='left'>
               <!-- <img :src="item.imgurl" alt=""> -->
                <img v-lazy="item.imgurl" alt="">
             </div>
             <div class='right'>
                <p class='name'>{{item.creator.name}}</p>
                <p class='album'>{{item.dissname}}</p>
             </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import Banner  from '../Banner'
import {getBannerData,getRecommendData} from '../../api/api'
// import axios from '../../utils/axios'
import BS from  'better-scroll'
export default {
  name:'a',
  components:{Banner},
  data(){
    return{
      list:[],
      recommendList:[]
    }
  },
  methods:{
    initBs(){
      let wrapper = this.$refs.wrapper
      // 开启下拉刷新
      this.bs= new BS(wrapper,{
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        },
        pullUpLoad: {
          threshold: 50
        }
      })
      // 监听下拉刷新
      this.bs.on('pullingDown',()=>{
        console.log('下拉刷新')
        // 上次下拉刷新已经结束 可以开始下一次
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        getRecommendData().then((res)=>{
          Indicator.close()
          this.recommendList = res.data.list
          this.bs.finishPullDown()
        })
      })
      // 监听上拉加载
      this.bs.on('pullingUp',()=>{
        console.log('上拉加载 请求下一页的数据')
        // 上一次上拉加载已经结束可以开启下一次
        this.bs.finishPullUp()
      })
    }
  },
  mounted(){
    console.log('推荐挂载')
    // 加载动画
    Indicator.open()
    getBannerData().then((res)=>(
      this.list = res.data.slider
    ))
    getRecommendData().then((res)=>{
      this.recommendList = res.data.list
      Indicator.close();
    })
    this.initBs() 
  },
  activated(){
    console.log('缓存组件激活')
  },
  deactivated(){
    console.log('缓存组件失活')
  },
  destroyed(){
    console.log('推荐销毁')
  }
}
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.recommend{
  .wrapper{
    position: fixed;
    top:88px;
    bottom: 0px;
    left:0px;
    right: 0px;
    overflow: hidden;
    .content{
      .w(375);
      .title{
        .w(375);
        height: 65px;
        text-align: center;
        line-height: 65px;
        font-size: @fs-s;
        color:@yellow;
      }
      .list{
        li{
          .w(375);
          height: 82px;
          box-sizing: border-box;
          padding: 0px 20px 20px 20px;
          // border: 1px solid red;
          display: flex;
          .left{
            width: 82px;
            height: 60px;
            img{ width: 60px;height:60px;}
            // background: pink;
          }
          .right{
            color: #fff;
            font-size: @fs-s;
          }
        }
      }
    }
  }
}
</style>
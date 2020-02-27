<template>
  <div class='singers'>
    <div class='wrapper' ref='singerWrapper'>
      <div class='content'>
          <ul>
            <li v-for='(item,index) in singers'
                :key='index'
            >  
              <!--每一组的首字母 -->
              <h3>{{item.Findex}}</h3>
              <!--首字母下的歌手信息 -->
              <ol>
                <li v-for='(sItem,sIndex) in item.list' :key='sIndex'>
                  <img v-lazy="sItem.avator" alt="">
                  <span>{{sItem.Fsinger_name}}</span>
                </li>
              </ol>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
/*
1.请求数据 v 
1.5 对请求的数据进行整理
2.根据数据渲染界面
[
  {Findex:A,list:[{a1},{a2},{a3}]}
  {Findex:b,list:[{b1},{b2},{b3}]}
]

3.渲染歌手列表 
4.歌手列表能滚动
5.渲染快速入口
6.歌手列表滚动可以控制快速入口 item切换
7.快速入扣点击  可以控制歌手   滚动
8.快速入口滑动 控制歌手滚动
9.点击歌手进入到歌手详情页
*/ 
import BS from 'better-scroll'
import {getSingersData} from 'api/api.js'
import {nomalData}from './index'
export default {
  data(){
    return{
      singers:[]
    }
  },
  methods:{
     initBs(){
       let wrapper = this.$refs.singerWrapper
       new BS(wrapper,{})
     }
  },
  created() {
   getSingersData().then((res)=>{
    //  处理数据
     let data =nomalData(res.data.list)
     this.singers=data
     console.log(data)
   })
  },
  mounted(){
     this.initBs()
   },
}
</script>
<style lang="less" scoped>
// 只有在样式里使用别名alias 需要加~
@import '~style/index.less';
.singers{
  position: fixed;
  top:88px;
  bottom: 0px;
  left:0px;
  right: 0px;
  .wrapper{
    height: 100%;  
    background: red;
    overflow: hidden;
    .content{
      .w(375);
    }
    }
}
</style>
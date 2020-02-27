<template>
  <div class='singers'>

    <!-- 滚动的列表 -->
    <div class='wrapper' ref='singerWrapper'>
      <div class='content'>
          <ul>
            <li v-for='(item,index) in singers'
                :key='index'
                :ref='item.Findex'
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
    <!-- 快速列表 -->
    <div class='quicklist'>
      <ul>
        <li v-for="(item,index) in quickData" 
            :key="index"
            :class='selFindex==item?"sel":""'>
          {{item}}
        </li>
      </ul>
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

3.渲染歌手列表 v
4.歌手列表能滚动 v
5.渲染快速入口 的数据 是和歌手列表数据进行关联 计算属性 v
6.歌手列表滚动可以控制快速入口 item切换
  滚动的时候 获取滚动区域内的首字母 
  1. 首字母数字 quickdata
  2. 距离数组  每一组歌手块的高度
  3. 判断向上移动的距离在距离数组里的下标 
  4. 根据下标在首字母数组里获取首字母
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
      singers:[],
      selFindex:'B',//选中的下标是什么
    }
  },
  methods:{
     initBs(){
       let wrapper = this.$refs.singerWrapper
       new BS(wrapper,{})
       console.log(this.$refs)
       // 获取距离数组  
       let distance=[]
       for (const key in this.$refs) {
           if(key!=='singerWrapper'){
             distance.push(this.$refs[key][0].offsetTop)
           }
       }
       console.log(distance)
     }
  },
  computed: {
    quickData(){
      // 快速入口数据和歌手数据做关联
 
      let result = this.singers.map((item)=>{
        return item.Findex
      })
      console.log('快速启动数据',result)
      return result
    }
  },
  created() {
    console.log(111)
   getSingersData().then((res)=>{
    //  处理数据
     let data =nomalData(res.data.list)
     this.singers=data
      // 请求到数据 并更新页面之后再初始化
      this.$nextTick(()=>{
        this.initBs()
      })
   })
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
  .quicklist{
    position: absolute;
    right: 10px;
    top:40px;
    width: 20px;
    background: rgba(0,0,0,.3);
    font-Size:@fs-xs;
    padding: 20px 0 20px;
    color:rgba(255,255,255,.5);
    border-radius:10px; 
    text-align: center;
    ul{
      li{
        width: 20px;
        height: 18px;
      }
      .sel{
        color: @yellow;
      }
    }
  }
  .wrapper{
    height: 100%;  
    // background: red;
    overflow: hidden;
    .content{
      .w(375);
      h3{
        height: 30px;
        line-height: 30px;
        background: #333;
        color:rgba(255,255,255,0.5);
        font-size: @fs-s;
        padding-left:20px;
         

      }
      ol{
        li{
          .w(375);
          height: 70px;
          // background: pink;
          box-sizing: border-box;
          padding: 20px 0px 0px 30px;
          display: flex;
          align-items: center;
          img{
            width: 50px;
            height: 50px;
            border-radius:25px; 
          }
          span{
            padding-left:20px; 
            display: inline-block;
            height: 50px;
            line-height: 50px;
            font-size: @fs-s;
            color:rgba(255,255,255,.5);
          }
        }
      }
    }
    }
}
</style>
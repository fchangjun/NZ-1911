<template>
  <div class='tab'>
     这里是歌手组件
  </div>
</template>
<script>
/*
1.请求数据
2.根据数据渲染界面
3.渲染歌手列表 
4.歌手列表能滚动
5.渲染快速入口
6.歌手列表滚动可以控制快速入口 item切换
7.快速入扣点击  可以控制歌手   滚动
8.快速入口滑动 控制歌手滚动
9.点击歌手进入到歌手详情页
*/ 
import {getSingersData} from 'api/api.js'
export default {
  methods:{

  },
  created() {
   getSingersData().then((res)=>{
     console.log(res)
   })
  }
}
</script>
<style lang="less" scoped>
// 只有在样式里使用别名alias 需要加~
@import '~style/index.less';
.tab{
  .w(375);
  height: 44px;
  display: flex;
  div{
    background: pink;
  }
}  
</style>
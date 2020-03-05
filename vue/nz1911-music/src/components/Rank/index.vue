<template>
  <div class='tab'>
     这里是排行组件
     <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
      <hr>
      <h3>轮播图</h3>
      <mt-swipe  class='swier'>
        <mt-swipe-item class='test'>
          <img src="https://pic.ibaotu.com/19/10/29/thumbnail/kristyimage/03/559a9b26598220f4bd58f0ffdc9525bd.jpg!ww7002" alt="">
        </mt-swipe-item>
         <mt-swipe-item>
          <img src="https://pic.ibaotu.com/19/10/29/thumbnail/kristyimage/03/559a9b26598220f4bd58f0ffdc9525bd.jpg!ww7002" alt="">
        </mt-swipe-item>
         <mt-swipe-item>
          <img src="https://pic.ibaotu.com/19/10/29/thumbnail/kristyimage/03/559a9b26598220f4bd58f0ffdc9525bd.jpg!ww7002" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>
<style lang="less" scoped>
@import '../../style/index.less';
.swier{
  height: 300px;
  .w(375);
  background: red;
  .test{
    .w(375);
    height: 300px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
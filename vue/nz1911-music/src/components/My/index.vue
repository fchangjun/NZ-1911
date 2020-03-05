<template>
  <div class='tab'>
     <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="c">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="d">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="e">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
  
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
</mt-index-list>

  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('进入我的组件')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('组件复用更新了')
    next()
  },
  beforeRouteLeave (to, from, next) {
     console.log('组件离开触发')
     let result = confirm('你确定要离开吗')
     if(result){ next() }
    
  }
}
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.tab{
  position: fixed;
  top:88px;
  bottom: 0px;
  .w(375);
}
</style>
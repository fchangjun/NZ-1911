<template>
  <div class='player' v-if='this.$store.state.show'>
     这里是播放器组件
  </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.player{
  position: fixed;
  top:0px;
  bottom: 0px;
  left:0;
  right:0;
  background: lightgreen
}  
</style>
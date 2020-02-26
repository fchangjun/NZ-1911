<template>
  <div class='tab'>
    <banner></banner>
  </div>
</template>
<script>
import Banner  from '../Banner'
export default {
  components:{Banner}
}
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.tab{
  .w(375);
  height: 44px;
  display: flex;
  div{
    background: pink;
  }
}  
</style>
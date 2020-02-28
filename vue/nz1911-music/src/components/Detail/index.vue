<template>
  <div class='detail'>
     这里叫详情页
     <span @click='back'>back</span>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
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
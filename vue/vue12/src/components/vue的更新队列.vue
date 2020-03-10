<template>
  <div class="hello">
    <hehe></hehe>
    <h3>vue的更新队列</h3>
    {{name}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'呵呵哒'
    }
  },
  // created(){
  //   this.name = 1
  // },
  mounted(){
    this.name = 1
    this.name = 2
    this.name = 3
  },
  updated(){
    console.log('数据更新了')
  }
}
// 将同一个事件循环内的所有数据操作进行和并 然后统一更新
//  1 2 3 4 5 1
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

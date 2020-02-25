<template>
  <div class='son1'>
     <H4>子组件1 </H4>
     
  </div>
</template>
<script>


export default {
  mounted() {
    console.log('组件1',this.$route)
  },
}
</script>
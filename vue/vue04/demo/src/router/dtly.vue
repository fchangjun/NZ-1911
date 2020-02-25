<template>
  <div>
     <H4>这里是动态路由 </H4>
     
  </div>
</template>
<script>


export default {
  mounted() {
    // 获取路由传承
     console.log(this.$route.params)
  },
}
</script>
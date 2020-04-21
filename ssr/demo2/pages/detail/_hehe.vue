<template>
  <div>
     <h4>這裡是商品詳情頁</h4>
     id:{{$route.params.hehe}}
  </div>
</template>
<script>
export default {
  created(){
    console.log(this)
  }
}
</script>
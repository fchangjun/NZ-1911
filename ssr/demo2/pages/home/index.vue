<template>
  <div id = 'home'>
     <h3>这里是首页</h3>
      {{age}}
      <button @click="add">add</button> 
      <hr>
      <Button @click='bug'>$bug</Button>
  </div>
</template>
<script>
import swiper from 'swiper'
export default {
  asyncData(context) {
    console.log('asyncdata')
    // context.app.myHehe('注册上下文的插件')
    context.app.$myTest('我是余欢水')
  },
  data(){
    return{
      age:16
    }
  },
  methods:{
    add(){
      this.age++
    },
    bug(){
      this.$bug('呵呵哒')
    }
  },
  created() {
    console.log('挂载',this)
    this.$myTest('水水')
  },
}
</script>
<template>
  <div id="app">
     <span @click='jump("/son1")'>son1</span>
     <span @click='jump("/son2")'>son2</span>
     <span @click='jump("/recommend")'>推荐</span>
     <span @click='jump("/dtly")'>动态路由</span>
     <button @click='back'>back</button>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  methods: {
    back(){
      this.$router.back()
    },
    jump(path){
      console.log(this)
      //push  replace go  back（go(-1)） forward (go(1))
      this.$router.push(path)
      // this.$router.push({path:path})
      // this.$router.push({name:'起的名字'})
      // this.$router.replace(path)
      // this.$router.push({path:path})
      // this.$router.push({name:'起的名字'})

      // push   a->b-c->d 每次返回一级  会将页面加入到页面栈
      // replace a->b-c->->d  直接回到最初的起点
      //
    }
  }
}
</script>

<style>
.hehe{
  color:lightgreen;
}
</style>

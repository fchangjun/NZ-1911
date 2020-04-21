<template>
  <div id = 'home'>
     <h3>这里是首页</h3>
      {{age}}
      <button @click="add">add</button> 
  </div>
</template>
<script>
export default {
  data(){
    return{
      age:16
    }
  },
  methods:{
    add(){
      this.age++
    }
  },
  created() {
    console.log('挂载',this)
  },
}
</script>
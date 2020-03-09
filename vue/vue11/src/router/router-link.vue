<template>
  <div id="app">
     <span @click='jump'>
       <slot></slot>
     </span>
  </div>
</template>

<script>


export default {
  props:['to'],
  methods:{
    jump(){
      console.log('点击到了',this.to)
      // 控制hash值的改变
      window.location.hash = this.to
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="hello">
    <div class="test1" @click.self='clickTest("爷爷")'>
      <div class="test2" @click='clickTest("霸霸")'>
        <div class="test3" @click='clickTest("儿子")'>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['value'],
  methods:{
    clickTest(msg){
      console.log(msg)
    }
  }
}

</script>

<style scoped>
.test1{
  width: 300px;
  height: 300px;
  background: green;
}
.test2{
  width: 200px;
  height: 200px;
  background: yellow;
}
.test3{
  width: 100px;
  height: 100px;
  background: red;
}
</style>

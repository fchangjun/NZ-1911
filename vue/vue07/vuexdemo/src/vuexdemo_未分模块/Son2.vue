<template>
  <div>
     <h4>子组件2</h4>
     name:{{name}}
     age:{{age}}
     <button @click="changeAge">改年龄</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed:{
    ...mapState(['name','age'])
  },
  methods:{
    ...mapMutations(['changeAge'])
  }
}
</script>
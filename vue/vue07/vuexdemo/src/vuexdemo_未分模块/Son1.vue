<template>
  <div>
     <h4>子组件1</h4>
     name:{{name}}
     age:{{age}}
     <button @click='changeName'>改名</button>

  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
  computed:{
    ...mapState(['name','age'])
  },
  methods:{
    ...mapMutations(['changeName'])
  }
}
</script>
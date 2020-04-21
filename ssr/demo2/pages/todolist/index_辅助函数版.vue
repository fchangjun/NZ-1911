<template>
  <div>
     <h4>这里是todolist</h4>
     <p>numm:{{count}}</p>
     <p>double:{{double}}</p>
     <button @click="changeCountSync(1)">action改变数量</button>
     <button @click="changeCount(1)">commit改变数量</button>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters(['double']),
    ...mapState(['count'])
  },
  methods:{
    ...mapActions(['changeCountSync']),
    ...mapMutations(['changeCount'])
  },
  created(){
    console.log('todolist',this)
  }
}
</script>
<template>
  <div>
     <h4>这里是todolist</h4>
     <p>numm:{{$store.state.count}}</p>
     <p>double:{{$store.getters.double}}</p>
     <button @click="$store.dispatch('changeCountSync',5)">action改变数量</button>
     <button @click="$store.commit('changeCount',4)">commit改变数量</button>
  </div>
</template>
<script>
export default {
  created(){
    console.log('todolist',this)
  }
}
</script>
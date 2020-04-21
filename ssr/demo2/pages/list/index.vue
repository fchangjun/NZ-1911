<template>
  <div>
     <h3>這裡是商品列表</h3>
     <ul>
       <li v-for='item in list' :key='item.id'>
         <nuxt-link :to="'/detail/'+item.id">  {{item.name}} </nuxt-link>
        
       </li>
     </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    setTimeout(()=>{
      this.list = [
        {id:'001',name:'紅燒肉'},
        {id:'002',name:'麻辣雞絲'},
        {id:'003',name:'火山飄雪'},
        ]
    },1000)
  },
}
</script>
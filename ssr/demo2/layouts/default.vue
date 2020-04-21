<template>
  <div>
    <h1>nuxt demo {{$store.state.count}}</h1>
    <nuxt-link to="/home">首页</nuxt-link>
    <nuxt-link to="/order">订单</nuxt-link>
    <nuxt-link to="/list">商品列表</nuxt-link>
    <nuxt-link to="/users">用戶</nuxt-link>
     <nuxt-link to="/todolist">todolist</nuxt-link>
     <hr/>
    <nuxt />
    
  </div>
</template>

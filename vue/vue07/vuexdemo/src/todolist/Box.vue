
<template>
  <div>
     <h4>todolist </h4>
     <todo-input></todo-input>
     <todo-list></todo-list>
     <todo-tab></todo-tab>
     
  </div>
</template>
<script>
import TodoInput from './todo-input'
import TodoList from  './todo-list'
import TodoTab from './todo-tab'
export default {
  components:{TodoInput,TodoList,TodoTab}
}
</script>
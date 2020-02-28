import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import todolist from './todolistStore'
const store = new Vuex.Store({
 modules:{
   todolist
 }
})


export default store
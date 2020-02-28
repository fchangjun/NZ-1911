export default {
  namespaced:true,//开启命名空间 会自动在方法前面加模块名
  state:{
     list:[{msg:'明天周天爱干啥干啥',finish:true},
     {msg:'呵呵哒',finish:false}
    ]
  },
  getters:{
     showList(state){
       let result =state.list.filter((item)=>{
          return item.finish==false
       })
       return result
     }
  },
  mutations:{
     addList(state,params){
      //  mutation 方法里的第一个参数 指的是state
      //  第二个参数才是调用的时候传递的值
       state.list.push({msg:params.msg,finish:false})
     },
     delList(state,index){
      console.log('删除',index) 
      state.list.splice(index,1)

     },
     updateList(state,params){
       state.list[params.index].finish=true
     }
  },
  actions:{
    
  }
}
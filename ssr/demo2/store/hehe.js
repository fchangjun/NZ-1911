export const  state = ()=>({
  name:"韩梅梅"
})
export const mutations={
  changeName(state,name = '隔壁老王') {
    state.name=name
  }
}
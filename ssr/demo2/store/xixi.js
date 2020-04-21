export const  state = ()=>({
  age:17
})
export const mutations={
  changeAge(state,age = 18) {
    state.age=age
  }
}
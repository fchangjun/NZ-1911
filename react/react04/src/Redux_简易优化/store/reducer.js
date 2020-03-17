let state={
  name:'韩梅梅',
  age:16
}
export default(prevState = state,actions)=>{
  console.log('奏折来了',prevState,actions)
  let newData = prevState

  // 数据的修改
  let {type,payload} = actions 

  switch (type) {
    case 'CHANGE_AGE':
      newData.age  = payload
      break;
    case "CHANGE_NAME":
      newData.name = payload
      break;
    default:
      break;
  }
  // 返回的数据㐊修改后的数据 也是getState获取到数据
  return newData
}
import state from './state'
export default(prevState = state , actions )=>{
 let newData = prevState 

 let  {type,hehe} = actions
//  修改数据
switch (type) {
  case 'ADD_LIST':
     newData.list.push({msg:hehe,finish:false})
    break;
  case  "DEL_LIST":
     newData.list.splice(hehe,1)
    break;
  default:
    break;
}
 return newData
}
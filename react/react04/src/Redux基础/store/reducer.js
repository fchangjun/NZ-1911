/*
老佛爷 是一个函数，能接受2个参数 参数1 修改前的数据 参数2就是奏折action 
批奏折 就是根据奏折action 去修改数据
将数据 返回给小皇帝
*/ 
// import State from  './state'
let State={
  name:'韩梅梅',
  age:16
}
// prevState 代表修改前的数据 = 付一个初始值默认值
export default (prevState = State,actions)=>{
 console.log('老佛爷批奏折',prevState,actions)
 let newData = prevState
 // 修改数据
 let {type,payload} = actions
 switch (type) {
   case 'CHANGE_NAME':
      newData.name = payload
     break;
   case 'CHANGE_AGE':
     newData.age = payload
     break;
   default:
     break;
 }
 //  返回修改后的数据
 console.log('老佛爷返回的数据',newData)
 return newData
}
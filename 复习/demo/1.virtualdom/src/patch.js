import {Element,render,setAttr} from './VirtualDom.js'
let  allPatches ;
let  index = 0;

function patch(node,patches){
  allPatches = patches 
  walk(node)
}

function walk(node){
  let current = allPatches[index++]
  // 当前补丁
  let childNodes = node.childNodes 
  // patches
  childNodes.forEach(child => {
    walk(child)
  });

  if(current){
    console.log(node,current)
    doPatch(node,current)
  }
}
function doPatch(node,patches){
 patches.forEach(patch=>{
   switch(patch.type){
    case 'replace':
       let newNode = patch.newNode 
       if(newNode instanceof Element){
        newNode=render(newNode) 
       }else{
        newNode=document.createTextNode(newNode);
       }
       console.log(node.parentNode)
       node.parentNode.replaceChild(newNode, node);
    break;
    case 'attr':
      let {attr} = patch  
      for (const key in attr) {
        if(attr[key]){
          // 添加属性
        }else{
          // 销毁属性
          console.log('销毁',key)
          node.removeAttribute(key)
        }
      }
    break;
    case "remove":{
      // 该元素需要移除
      node.parentNode.removeChild(node);
    }
   }
 })
}
export default patch 
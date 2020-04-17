function diff(oldTree,newTree){
  let patches ={}
  let index = 0
  walk(oldTree,newTree,index,patches)
  return patches
}

function walk(oldNode,newNode,index,patches){
  let current = [] 
  
  if(!newNode){
    // 新的元素不存在 老元素直接做删除操作 
    current.push({type:'remove',index})
  }else if(isString(oldNode)&&isString(newNode)){
    // 新老节点都是文字节点
    if(oldNode !==newNode){
      current.push({type:'text',text:newNode})
    }
  }else if(oldNode.type === newNode.type){
    // 判断是为同一元素 进行属性修改
    let attr = attrDiff(oldNode.props,newNode.props)
    if(Object.keys(attr).length>0){
      current.push({type:'attr',attr})
    }
    // 如果有子节点递归子节点
    diffChildren(oldNode.children,newNode.children,patches)
  }else{
    // 节点被替换
    current.push({type:'replace',newNode})
  }

  if(current.length){
    patches[index] = current
  }
}

// 判断是否为字符串
function isString(node){
  return typeof node ==='string'
}
// 判断属性差异 
function attrDiff(oldAttr,newAttr){
  let patch={}
  // 新老都有的属性以新的为准
  for (const key in oldAttr) {
    if(oldAttr[key]!==newAttr[key]){
        patch[key] = newAttr[key]
    }
  }
  // 老有新没有 不处理
  // 心有老没有添加 
  for (let key in newAttr) {
    // 老节点没有新节点的属性
    if (!oldAttr.hasOwnProperty(key)) {
        patch[key] = newAttr[key];
    }
  }

  return patch

}
// 对比子节点
let num = 0;

function diffChildren(oldChildren, newChildren, patches) {
    // 比较老的第一个和新的第一个
    oldChildren.forEach((child, index) => {
        walk(child, newChildren[index], ++num, patches);
    });
}
export  {diff}
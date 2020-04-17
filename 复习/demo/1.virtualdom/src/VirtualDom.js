
class Element {
  constructor(type,props,children){
    this.type = type
    this.props = props
    this.children = children 
  }
}

function createElement(type,props,children){
  return new Element(type,props,children)
}
// 将虚拟dom转化为真实dom结构
function render(virtualDom){
  let {type,props,children} = virtualDom 
  // 创建元素
  let el =document.createElement(type)
  // 给元素设置属性
  for (const key in props) {
   setAttr(el,key,props[key])
  }
  // 判断子节点 
  if(children instanceof Array){
   children.map((child)=>{
     child = child instanceof Element? render(child):document.createTextNode(child)
     el.appendChild(child)
    })
  }
 
  return el
}
function setAttr(node,key,value){
  node.setAttribute(key, value);
}
function renderDom(htmlDom,target){
  //  let htmlDom = render(virtualDom)
   target.appendChild(htmlDom)
}
export { 
  setAttr,
  createElement,
  render,
  Element,
  renderDom
}


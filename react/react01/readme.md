### react 是什么
用户描述用户界面的js库 (v)
angular   mvc 
vue       mvvm 
facebook 
15.6   2018上半年 15.6 
16     2018年下半年  16 

### jsx 语法糖   javascript xhtml
用jsx 来描述组件的虚拟dom
class 也是语法糖
```
<div id='test' class='hehe'>
  <p id='p'>
    <div></div>
  </p>
  <span>呵呵</span>
</div>


React.createElemet('div',{id:"test",className："hehe"},[
  React.crateElment('p',{id:p},[
    React.crateElment('div',{id:p，text:"呵呵"},[])
  ])
   React.crateElment('span',{id:p，text:"呵呵"},[])
])
```
xhtml 严格模式的HTML
1. 必须只有一个根源 
2. 标签必须闭合
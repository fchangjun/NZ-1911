// Compiler模板编译器
function Compiler(el, vm) {
  // 先拿到需要编译的DOM节点
  this.el = el.nodeType === 1 ? el : document.querySelector(el);
  // 拿到当前的vm实例
  this.vm = vm;
  // 如果当前的el存在，就开始编译
  if(this.el) {
      // 将真实的DOM转换为文档碎片
      let fragment = this.vNodeFragment(this.el);
      // 调用compile方法进行编译
      this.compile(fragment);
      // 编译完成之后再添加到真实DOM中
      this.el.appendChild(fragment);
  }
}

// DOM文档片段
Compiler.prototype.vNodeFragment = function(el) {
  // 创建文档片段
  let fragment = document.createDocumentFragment();
  let firstChild;
  // 遍历当前所有的DOM子节点
  while (firstChild = el.firstChild) {
      // 将真实DOM节点添加到文档片段中
      fragment.appendChild(firstChild);
  }
  // 返回虚拟文档片段
  return fragment;
};

// 进行编译
Compiler.prototype.compile = function(fragment) {
  // 拿到文档片段的所有子节点
  // 必须通过childNodes拿，因为childNodes不会忽略文本节点。
  let children = fragment.childNodes;
  // 转换为真实数组并进行遍历
  Array.prototype.slice.call(children).forEach(node => {
      // 如果当前是元素节点的话，继续递归遍历，并编译元素节点
      if(node.nodeType === 1) {
          this.compile(node); // 对当前节点内的子节点进行递归遍历
          this.compileElement(node); // 编译元素节点
      }else {
          // 否则是文本节点，就开始编译文本
          this.compileText(node);
      }
  })
};

// 编译元素节点
Compiler.prototype.compileElement = function (node) {
  // 获取到元素所有的属性
  let attrs = node.attributes;
  // 转换为真实数组并进行遍历
  Array.prototype.slice.call(attrs).forEach(attr => {
      // 获取到当前的属性名
      let attrName = attr.name;
      // 判断当前的属性是否是指令
      if(attrName.includes('v-')) {
          // 如果是指令的话，拿到当前的属性值
          let value = attr.value;
          // 拿到当前的指令名
          let [,type] = attrName.split('-');
          // 对当前指令执行编译
          CompilerUtil[type](node, this.vm, value);
          // 判断当前属性是否是事件
      }else if(attrName.includes('@')) {
          // 拿到事件名称
          let event = attrName.slice(1);
          // 拿到事件需要触发的方法名称
          let method = attr.value;
          // 对当前元素添加DOM事件
          CompilerUtil.addEvent(node, event, method, this.vm);
      }
  })
};

// 编译文本节点
Compiler.prototype.compileText = function (node) {
  let content = node.textContent; // 获取文本节点的内容
  let reg = /\{\{(.+?)\}\}/g; // 匹配模板编译器的内容
  // 如果能匹配到模板编译器
  if(reg.test(content)) {
      // 编译文本节点
      CompilerUtil.text(node, this.vm, content);
  }
};
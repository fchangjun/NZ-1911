// 模板编译工具对象
const CompilerUtil =  {
  // 文本编译的回调函数
  textUpdater(node, value) {
      node.textContent = value;
  },
  // input编译的回调函数
  modelUpdater(node, value) {
      node.value = value;
  },
  // 获取vm实例中对应的值
  getValue(vm, variable) {
      // 获取对象的属性
      variable = variable.split('.');
      // 通过reduce方法递归遍历vm.$data，拿到最终在vm实例中的属性值
      return variable.reduce((prev, next) => prev[next], vm.$data);
  },
  // 获取文本中变量对应的内容
  getTextValue(vm, variable) {
      // 通过正则匹配，拿到属性名
      let reg = /\{\{([^}]+)\}\}/g;
      return variable.replace(reg, ($0, $1) => {
          // 通过属性名，调用getValue方法，获取属性值
          return this.getValue(vm, $1);
      })
  },
  // 设置Value
  setValue(vm, variable, newValue) {
      // 获取对象的属性名
      variable = variable.split('.');
      // 通过reduce方法遍历
      return variable.reduce((prev, next, index) => {
          // 如果当前是匹配的属性名的话
          if(index === variable.length - 1) {
              // 给当前的属性设置值
              return prev[next] = newValue;
          }
          // 如果不是就返回继续计算
          return prev[next];
      }, vm.$data);
  },
  // 双向数据绑定 v-model的简单实现
  model(node, vm, variable) {
      // 获取到双向数据绑定的修改方法
      let updateFn = this.modelUpdater;
      // 获取到对应的值
      let value = this.getValue(vm, variable);
      // 添加订阅者， 给订阅者添加回调
      new Watcher(vm, variable, newValue => {
          // 当数据发生修改的时候，就触发当前回调，修改元素节点的值
          updateFn && updateFn(node, newValue);
      });
      // 将v-model属性从DOM节点上删除
      node.removeAttribute('v-model');
      // 给当前元素节点添加input事件
      node.addEventListener('input', e => {
          // 拿到对应的值
          let value = e.target.value;
          // 设置值
          this.setValue(vm, variable, value);
      });
      // 初次渲染的时候，也要设置一次值
      updateFn && updateFn(node, value);
  },
  // 添加事件
  addEvent(node, event, method, vm) {
      // 给元素删除事件符
      node.removeAttribute('@'+event);
      // 给元素添加事件
      node.addEventListener(event, (...args) => {
          // 调用vm上的方法，并传入参数
          vm[method].apply(vm, args);
      })
  },
  // 编译文本节点的变量
  text(node, vm, variable) {
      // 文本节点的修改函数
      let updateFn = this.textUpdater;
      // 获取到文本节点变量的值
      let value = this.getTextValue(vm, variable);
      // 定义正则
      let reg = /\{\{(.+?)\}\}/g;
      // 通过正则匹配变量，给变量添加观察者
      variable.replace(reg, ($0, $1) => {
          // 当解析模板遇到变量的时候，应该使用观察者监听这个变量
          new Watcher(vm, $1, newValue => {
              // 观察者的回调函数，当数据发生改变就触发该回调
              updateFn && updateFn(node, newValue);
          })
      });
      // 第一次设置值
      updateFn && updateFn(node, value);
  }
};
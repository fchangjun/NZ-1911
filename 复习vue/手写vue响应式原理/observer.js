// 数据劫持
function Observer(data) {
  // Observer必须是一个构造函数，如果不是通过new关键字调用的话，
  // 在内部使用new关键字。
  if(!(this instanceof arguments.callee)) {
      return new arguments.callee(data);
  }
  // 如果data不是一个对象的话，提示错误，
  // 因为只有对象才能调用Object.defineProperty
  if(!data || typeof data !== 'object') {
      error('代理的data必须是一个对象')
  }
  // 调用observe方法
  this.observe(data);
}

Observer.prototype.observe = function(data) {
  if(!data || typeof data !== 'object') {
      return;
  }
  // 获取对象上的键值数组并对它进行遍历
  Object.keys(data).forEach(key => {
      // 调用数据劫持方法
      this.defineReactive(data, key, data[key]);
      // 判断如果当前的值还是对象的话，递归劫持
      if(typeof data[key] === 'object') {
          this.observe(data[key]); // 递归劫持所有的值
      }
  })
};

Observer.prototype.defineReactive = function(data, key, value) {
  // 保存this
  const _this = this;
  // 添加观察者
  let dep = new Dep();
  // 数据劫持
  Object.defineProperty(data, key, {
      enumerable: true, // 可枚举的
      configurable: true, // 可删除的
      // 代理get
      get() {
          // 当前Dep.target是指的Watcher(订阅者)实例，
          // 向dep实例中添加Watcher实例
          Dep.target && dep.addSub(Dep.target);
          return value;
      },
      // 代理set
      set(newValue) {
          // 如果新的值和旧的值不相等的情况下
          if(newValue !== value) {
              // 重新调用observe劫持数据
              _this.observe(newValue);
              // 设置新的值
              value = newValue;
              // dep实例通知订阅者进行修改
              dep.notify();
          }
      }
  })
};
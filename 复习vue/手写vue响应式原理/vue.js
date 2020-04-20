// Vue构造函数
function Vue(options) {
  // 如果当前Vue不是通过new 关键字调用，就进行报错
  if(!(this instanceof arguments.callee)) {
      error('Vue是一个构造函数，必须通过new关键字调用！');
  }
  // 如果是的话，就接着执行_init方法
  this._init(options);
}
// 实例化Vue的方法
Vue.prototype._init = function(options) {
  // 先将options保存在Vue的this.$options上
  this.$options = options;
  // 再拿到对应的data中的值，没有默认为空对象
  this.$data = initData(this.$options) || {};
  // 拿到对应的方法，没有默认为空对象
  this.$methods = this.$options.methods || {};
  // 进行数据劫持
  new Observer(this.$data);
  // 对数据和方法进行代理
  proxyData(this, this.$data);
  proxyData(this, this.$methods);
  // 生命周期created函数
  this.$options.created.apply(this);
  // 如果有el属性的话，自动调用$mount方法，挂载到DOM节点中
  if(this.$options.el) {
      this.$mount(this.$options.el);
  }
};

// $mount方法，将Vue实例挂载到DOM节点上
Vue.prototype.$mount = function(el) {
  // 拿到对应的DOM节点
  let $el = typeof el === 'string'
          ?
          document.querySelector(el)
          : el.nodeType === 1
              ?
              el
              :
              error('el必须是一个选择器或者是一个DOM节点！');
  // 将DOM保存在$el属性上
  this.$el = $el;
  // 通过Compiler编译器进行编译
  new Compiler(this.$el, this);
  // 调用mounted生命周期钩子函数
  this.$options.mounted.apply(this);
  // 返回当前的Vue实例，保证外部能够拿到正确的Vue实例
  return this;
};

// 初始化Vue实例的data
function initData(options) {
  // 拿到data的数据类型
  const type = typeof options.data;
  // 如果是function的话，调用函数拿到对象，否则直接返回对象
  return type === 'function' ? options.data() : options.data;
}

// 对data内的数据进行代理
function proxyData(target, proxy) {
  // 拿到对象上的所有key值组成的数组，并进行遍历
  Object.keys(proxy).forEach(key => {
      // 通过Object.defineProperty方法对数据进行代理
      Object.defineProperty(target, key, {
          get() {
              return proxy[key];
          },
          set(newValue) {
              proxy[key] = newValue;
          }
      })
  });
}

// 错误信息
function error(info) {
  throw new Error(info);
}
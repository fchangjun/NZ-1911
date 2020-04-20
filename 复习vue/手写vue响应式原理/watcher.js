// 订阅者
function Watcher(vm, variable, callback) {
  // 保存vm实例
  this.vm = vm;
  // 保存需要修改的属性
  this.variable = variable;
  // 保存属性修改时需要触发的回调
  this.callback = callback;
  // 保存属性的初始值，并将当前订阅者添加到发布者上
  this.value = this.get();
}

Watcher.prototype.get = function() {
  // 将当前的 watcher 添加到Dep发布者的静态属性上
  Dep.target = this;
  // 获取到当前的属性值
  let value = CompilerUtil.getValue(this.vm, this.variable);
  // 在Dep发布者的静态属性上清除当前 watcher
  Dep.target = null;
  // 返回拿到的值
  return value;
};

Watcher.prototype.update = function() {
  // 发生修改的时候，重新获取值
  let newValue = CompilerUtil.getValue(this.vm, this.variable);
  // 先获取旧的值
  let oldValue = this.value;
  // 如果两个值不等的话，调用修改DOM的回调函数
  if(newValue !== oldValue) {
      this.callback(newValue);
  }
};
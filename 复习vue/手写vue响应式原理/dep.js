// Dep发布者将要执行的函数统一存储在一个数组中管理，
// 当达到某个执行条件时，循环这个数组并执行每一个成员。
function Dep() {
  this.subs = [];
}

// 在发布者Dep实例上添加订阅者
Dep.prototype.addSub = function(watcher) {
  this.subs.push(watcher);
};

// 通知订阅者进行修改
Dep.prototype.notify = function() {
  // 遍历所有的订阅者，调用订阅者上的update方法进行修改。
  this.subs.forEach(watcher => watcher.update());
};
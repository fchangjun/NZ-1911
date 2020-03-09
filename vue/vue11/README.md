1. 路由实现原理是什么?
   a.控制地址栏改变
   b.根据地址栏的改变来控制组件的切换
   hash 通过 hashchange 监听地址栏的改变
   history 通过 popState 监听地址栏的改变
2. vue中的响应式是什么?响应式原理?   
    数据变页面变 
    vue在组件和实例初始化的时候 会将data里的数据进行 数据劫持(object.definepropty对数据做处理)，一个叫getter
    一个叫setter getter在使用数据的时候触发  setter在修改数据的时候触发， 修改数据的时候会触发setter,触发底层的watcher监听，通知dom修改刷新  
3. vue中数据变页面一定变嘛？
    不一定的 数据变页面变是因为初始化的时候数据劫持了data  
    1. 对象属性的添加 
    2. 数组长度的改变
    以上两种情况新添加的属性都没有getter和setter 数据变了页面也不变
    可以通过$set方法处理
4. $set 的功能
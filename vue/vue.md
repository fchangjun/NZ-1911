
### Vue

> Vue是一个前端js框架，由尤雨溪开发，是个人项目

Vue近几年来特别的受关注，三年前的时候angularJS霸占前端JS框架市场很长时间，接着react框架横空出世，因为它有一个特性是虚拟DOM，从性能上碾轧angularJS，这个时候，vue1.0悄悄的问世了，它的优雅，轻便也吸引了一部分用户，开始收到关注，16年中旬，VUE2.0问世，这个时候vue不管从性能上，还是从成本上都隐隐超过了react，火的一塌糊涂，这个时候，angular开发团队也开发了angular2.0版本，并且更名为angular，吸收了react、vue的优点，加上angular本身的特点，也吸引到很多用户，目前已经迭代到5.0了。

学习vue是现在前端开发者必须的一个技能。



##### 前端js框架到底在干嘛，为什么要用

js框架帮助开发者写js逻辑代码，在开发应用的时候js的功能划分为如下几点：

1. 渲染数据

2. 操作dom（写一些效果）

3. 操作cookie等存储机制api

在前端开发中，如何高效的操作dom、渲染数据是一个前端工程师需要考虑的问题，而且当数据量大，流向较乱的时候，如何正确使用数据，操作数据也是一个问题


而js框架对上述的几个问题都有自己趋于完美的解决方案，开发成本降低。高性能高效率。唯一的缺点就是需要使用一定的成本来学习。


##### Vue官网介绍

vue是渐进式JavaScript框架

vue的主张较弱

“渐进式框架”和“自底向上增量开发的设计”是Vue开发的两个概念

Vue可以在任意其他类型的项目中使用，使用成本较低，更灵活，主张较弱，在Vue的项目中也可以轻松融汇其他的技术来开发，并且因为Vue的生态系统特别庞大，可以找到基本所有类型的工具在vue项目中使用

特点：易用（使用成本低），灵活（生态系统完善，适用于任何规模的项目），高效（体积小，优化好，性能好）

Vue是一个MVVM的js框架，但是，Vue 的核心库只关注视图层，开发者关注的只是m-v的映射关系


### 与AngularJS的对比

Vue的很多api、特性都与angularJS相似，其实是因为Vue在开发的时候借鉴了很多AngularJS中的特点，而AngularJS中固有的缺点，在Vue中已经解决，也就是青出于蓝而胜于蓝，Vue的学习成本比AngularJS低很多，因为复杂性就低

AngularJS是强主张的，而Vue更灵活

Vue的数据流是单向的，数据流行更清晰

Angular里指令可以是操作dom的，也可以封装一段结构逻辑代码，例如：广告展示模块

Vue中的指令只是操作dom的，用组件来分离结构逻辑

AngularJS的性能比不上Vue


### Vue的使用

Vue不支持IE8，因为使用了ES5的很多特性

可以直接通过script标签来引入vue.js，有开发版本和生产版本，开发版本一般我们在开发项目的时候引入，当最后开发完成上线的时候引入生产版本，开发版本没有压缩的，并且有很多提示，而生产版本全部删掉了

在Vue中提供了一个脚手架（命令行工具）可以帮我们快速的搭建基于webpack的开发环境...


#### Vue的实例

每一个应用都有一个根实例，在根实例里我们通过组件嵌套来实现大型的应用

也就是说组件不一定是必须的，但是实例是必须要有的

在实例化实例的时候我们可以传入一个；配置项，在配置项中设置很多属性方法可以实现复杂的功能


在配置中可以设置el的属性，el属性代表的是此实例的作用范围

在配置中同过设置data属性来为实例绑定数据


### mvc/mvvm

[阮大神博客](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

mvc 分为三层，其实M层是数据模型层，它是真正的后端数据在前端js中的一个映射模型，他们的关系是：数据模型层和视图层有映射关系，model改变，view展示也会更改，当view产生用户操作或会反馈给controller，controller更改model，这个时候view又会进行新的数据渲染

![MVC](http://image.beekka.com/blog/2015/bg2015020105.png)

这是纯纯的MVC的模式，但是很多框架都会有一些更改

前端mvc框架，如angularjs，backbone：

![前端MVC](http://image.beekka.com/blog/2015/bg2015020108.png)

会发现，用户可以直接操作controller（例如用户更改hash值，conrtoller直接监听hash值变化后执行逻辑代码，然后通知model更改）

控制器可以直接操作view，如果，让某一个标签获得进入页面获得焦点，不需要model来控制，所以一般会直接操作（angularJS，指令）

view可以直接操作model （数据双向绑定）

MVP:

[mvp](http://image.beekka.com/blog/2015/bg2015020109.png)

view和model不能直接通信，所有的交互都由presenter来做，其他部分的通信都是双向的

view较薄 ，presenter较为厚重


MVVM：

[mvvm](http://image.beekka.com/blog/2015/bg2015020110.png)

MVVM和MVP及其相似，只是view和viewmodel的通信是双向绑定，view的操作会自动的像viewmodel通过


##### v-for

这是一个指令，只要有v-的就是指令（directive 操作dom ）

在vue中可以通过v-for来循环数据的通知循环dom，语法是item in/of items，接收第二个参数是索引 (item,index) of items,还可以循环键值对，第一个参数是value，第二个是key，第三个依然是索引


##### v-on

在vue中还有v-on来为dom绑定事件，在v-on：后面加上要绑定的事件类型，值里可以执行一些简单javascript表达式：++ -- = ...

可以将一些方法设置在methods里，这样就可以在v-on:click的值里直接写方法名字可以，默认会在方法中传入事件对象，当写方法的时候加了()就可以传参，这个时候如果需要事件对象，那就主动传入$event

v-on绑定的事件可以是任意事件,v-on:可以缩写为@


为什么在 HTML 中监听事件?

你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。


##### 模板语法

在vue中，我们使用mustache插值({{}})来将数据渲染在模板中

使用v-once指令可以控制只能插入一次值，当数据变化的时候，模板对应的视图不更新

使用v-html指令可以解析html格式的数据

在html标签属性里不能使用mustache插值，这个时候给元素添加动态属性的时候使用v-bind来绑定属性，可以缩写成:

在使用v-bind绑定class和内联样式的时候，vue做了一些优化，可以使用对象语法和数组的语法来控制

防止表达式闪烁：

1. v-cloak

    给模板内的元素添加v-cloak属性后，元素在vue没有加载完的时候就有这个属性，当vue加载完成后这个属性就消失了，所以我们可以给这个属性设置css样式为隐藏
```
    <style>
    [v-cloak]{
        visibility: hidden;
    }
    </style>
```

2. v-text/v-html

    v-text会指定将模板内元素的textContent属性替换为指令值所代表的数据，也可以用于防止闪烁
    v-html可以解析标签，更改元素的innerHTML，性能比v-text较差

3. v-pre

    跳过元素和其子元素的编译过程，可以用来显示mustache

##### vue-resource 

这是一款vue的插件，可以用来进行数据交互，支持的请求方式：GET/POST/JSONP/OPTIONS...

这个插件官方宣布不在更新维护，也就是说尽量不要使用



##### 计算属性、监听

    有的时候我们需要在模板中使用数据a，这个时候就需要用到表达式，但是有的地方我们需要对a数据进行一些简单的处理后才能使用，那么我们就会在表达式中写一些js逻辑运算

    ```
    <div id="example">
    {{ message.split('').reverse().join('') }}
    </div>
    ```
    这样我们的维护就会非常困难，也不便于阅读


    那め我们就可以在methods里设置一个方法，在模板的表达式中使用这个方法

    ```
    <p>Reversed message: "{{ reversedMessage() }}"</p>
    // 在组件中
    methods: {
    reversedMessage: function () {
        return this.message.split('').reverse().join('')
    }
    }
    ```

    但是这个时候，只要vm中有数据变化，这个变化的数据可能和我们关注的数据无关，但是vm都会重新渲染模板，这个时候表达式中的方法就会重新执行，大大的影响性能


    这个时候其实我们可以使用监听器里完成：

    在vm实例中设置watch属性，在里面通过键值对来设置一些监听，键名为数据名，值可以是一个函数，这个函数在数据改变之后才会执行，两个参数分别是性格前的值和更改后的值
```
    a: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
    }
```

    值还可以是一个方法名字，当数据改变的时候这个方法会执行

    当数据为object的时候，object的键值对改变不会被监听到（数组的push等方法可以）,这个时候需要设置深度监听：

```
    c: {
        deep:true,
        handler:function (val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        }
    },
```
    监听的handler函数前面的这几种写法都是在数据变化的时候才会执行，初始化的时候不会执行，但是如果设置immediate为true就可以了

```
    num:{
        immediate:true,
        handler:function(val){
            this.nums = val*2
        }
    }
```

    我们在回到上面的问题，用监听器加上immediate属性就可以做到该效果，但是大家可以看到的是逻辑稍稍有点复杂

    watch还可以通过实例对象直接使用:vm.$watch，返回一个取消监听的函数，这个函数执行之后会取消监听


    我们一般都会用到一个叫计算属性的东西来解决：

    计算属性就是在实例配置项中通过computed来为vm设置一个新的数据，而这个新数据会拥有一个依赖（一条已经存在的数据），当依赖发送变化的时候，新数据也会发送变化

    与方法的方式相比，它性能更高，计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

    与watch相比，写起来简单，逻辑性更清晰，watch一般多用于，根据数据的变化而执行某些动作，而至于这些动作是在干什么其实无所谓，而计算属性更有针对性，根据数据变化而更改另一个数据

    计算属性也拥有getter和setter，默认写的是getter，设置setter执行可以当此计算属性数据更改的时候去做其他的一些事情，相当于watch这个计算属性
```
    xm:{
        get:function(){//getter 当依赖改变后设置值的时候
            return this.xing+'丶'+this.ming
        },
        set:function(val){//setter 当自身改变后执行
            this.xing = val.split('丶')[0]
            this.ming = val.split('丶')[1]
        }
    }
```  

##### 过滤器

vue中可以设置filter(过滤器)来实现数据格式化，双花括号插值和 v-bind 表达式中使用



vue1.0的有默认的过滤器，但是在2.0的时候全部给去掉了

所以在vue中如果想要使用过滤器就需要自定义

自定义的方法有两种：全局定义和局部定义，全局定义的过滤器在任意的实例、组件中都可以使用，局部定义就是在实例、组件中定义，只能在这个实例或组件中使用

1. 全局定义

    Vue.filter(name,handler)

    name是过滤器的名字，handler是数据格式化处理函数，接收的第一个参数就是要处理的数据，返回什么数据，格式化的结果就是什么

    在模板中通过 | (管道符) 来使用,在过滤器名字后面加（）来传参，参数会在handler函数中第二个及后面的形参来接收

```
    <p>{{msg | firstUpper(3,2)}}</p>

    Vue.filter('firstUpper',function (value,num=1,num2) {
        console.log(num2)
        return value.substr(0,num).toUpperCase()+value.substr(num).toLowerCase()
    })
```
2. 局部定义

    在实例、组件的配置项中设置 filters，键名为过滤器名，值为handler
```
    filters:{
        firstUpper:function (value,num=1,num2) {
        console.log(num2)
        return value.substr(0,num).toUpperCase()+value.substr(num).toLowerCase()
        }
    }
```

注意：

    过滤器只能在mustache插值、v-bind里使用，其他的指令等地方都不能用


>作业:自定义类似于angularJS中的currency、order、filter过滤器


##### 条件渲染

在Vue中可以使用v-if来控制模板里元素的显示和隐藏，值为true就显示，为false就隐藏

v-if控制的是是否渲染这个节点

当我们需要控制一组元素显示隐藏的时候，可以用template标签将其包裹，将指令设置在template上，等等vm渲染这一组元素的时候，不会渲染template

当有else分支逻辑的时候，可以给该元素加上v-else指令来控制，v-else会根据上面的那个v-if来控制，效果与v-if相反，注意，一定要紧挨着

还有v-else-if指令可以实现多分支逻辑

```
    <input type="text" v-model="mode">  
      <template  v-if="mode=='A'">
        <h1>1.title</h1>
        <p>我的第一个P标签</p>  
      </template>
     <template  v-else-if="mode=='B'">
        <h1>2.title</h1>
        <p>我的第二个P标签</p>
     </template>
     <template  v-else-if="mode=='C'">
        <h1>3.title</h1>
        <p>我的第三个P标签</p>
     </template>
     <template  v-else>
       
        <p>不好意思，输入有误</p>
     </template>
```

需要注意的另一个地方是：Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这样确实能使Vue变得更快，性能更高，但是有的时候我们需要让实例去更新dom而不是复用，就需要给dom加上不同的key属性，因为vue在判断到底渲染什么的时候，包括哪些dom可以复用，都会参考key值，如果dom表现基本一致，符合复用的条件，但是key值不同，依然不会复用


Vue还提供了v-show指令，用法和v-if基本一样，控制的是元素的css中display属性，从而控制元素的显示和隐藏 ， 不能和v-else配合使用,且不能使用在template标签上，因为template不会渲染，再更改它的css属性也不会渲染，不会生效



###### v-if vs v-show

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。



##### mixin

在Vue中，我们可以通过定义多个mixin来实现代码抽离复用，便于维护，提升页面的逻辑性

要注意的是：data属性不要使用mixin，因为从逻辑上来说，每一个实例、组件的数据都应该是独立的

一个mixin其实就是一个纯粹的对象，上面挂载着抽离出来的配置，在某一个实例中，通过mixins选项（数组）导入后，此实例就拥有导入的mixin的配置

且导入的配置不会覆盖原有的，而是合并到一起





##### 虚拟dom

频繁且复杂的dom操作通常是前端性能瓶颈的产生点，Vue提供了虚拟dom的解决办法

虚拟的DOM的核心思想是：对复杂的文档DOM结构，提供一种方便的工具，进行最小化地DOM操作。这句话，也许过于抽象，却基本概况了虚拟DOM的设计思想

(1) 提供一种方便的工具，使得开发效率得到保证
(2) 保证最小化的DOM操作，使得执行效率得到保证


也就是说，虚拟dom的框架/工具都是这么做的：

1. 根据现有的真实dom来生成一个完整的虚拟dom树结构
2. 当数据变化，或者说是页面需要重新渲染的时候，会重新生成一个新的完整的虚拟dom
3. 拿新的虚拟dom来和旧的虚拟dom做对比（使用diff算法），。得到需要更新的地方之后，更新内容

这样的话，就能大量减少真实dom的操作,提高性能


##### 组件化

模块化就是将系统功能分离成独立的功能部分的方法，一般指的是单个的某一种东西，例如js、css

而组件化针对的是页面中的整个完整的功能模块划分，组件是一个html、css、js、image等外链资源，这些部分组成的一个聚合体

优点：代码复用，便于维护

划分组件的原则：复用率高的，独立性强的

组件应该拥有的特性：可组合，可重用，可测试，可维护

##### 组件

在vue中，我们通过Vue.extend来创建Vue的子类，这个东西其实就是组件

也就是说Vue实例和组件的实例有差别但是差别不带，因为毕竟一个是父类一个是子类

一般的应用，会拥有一个根实例，在根实例里面都是一个一个的组件

因为组件是要嵌入到实例或者父组件里的，也就是说，组件可以互相嵌套，而且，所有的组件最外层必须有一个根实例，所以组件分为：全局组件和局部组件

全局组件在任意的实例、父级组件中都能使用，局部组件只能在创建自己的父级组件或者实例中使用

组件通过不同的注册方法成为全局、局部组件

创建组件：
```
Vue.extend(options)
```
全局注册：
```
    var App = Vue.extend({
        template:"<h1>hello world</h1>"
    })
    Vue.component('my-app',App)
```
简便写法：
```
   // 创建组件构造器和注册组件合并一起  
    Vue.component('hello',{//Vue会自动的将此对象给Vue.extend
        template:"<h1>hello</h1>"
    })
```
组件通过template来确定自己的模板,template里的模板必须有根节点，标签必须闭合

组件的属性挂载通过：data方法来返回一个对象作为组件的属性，这样做的目的是为了每一个组件实例都拥有独立的data属性

局部注册：

```
    new Vue({
        el:"#app",
        components:{
            'my-app':App
        }
    })
```
简便写法：

```
    data:{},
    components:{
        'hello':{
            template:"<h1>asdasdasdasdasdas</h1>"
        }
    }
```

在实例或者组件中注册另一个组件，这个时候，被注册的组件只能在注册它的实例或组件的模板中使用，一个组件可以被多个组件或实例注册

###### 注意浏览器规则

因为vue在解析模板的时候会根据某些html的规则，例如，在table里只能放tr,td,th..，如果放入组件不会解析 这个时候我们可以放入tr使用is方式来标识这个tr其实是组件

```
<table id="app">
    <tr is="hello"></tr>
</table>
```

###### template

我们可以在html的某个地方通过template标签来定义组件的模板，在组件的template属性中通过选择器指定对应的template标签内容就可以了,注意，需要给template标签加id来指定
```
<template id="my-hello">
    <div>
        <h1>hello world</h1>
        <p>hahahah</p>
    </div>
</template>
//组件中
template:"#my-hello"
```

###### is切换

在实例、组件的模板中的某一个标签上，可以通过is属性来指定为另一个目标的组件，这个时候我们一般会使用component标签来占位、设置is属性来指定目标组件
```
<component :is="type"></component>

//组件中
data:{
    type:'aaa'
},
components:{
    'aaa':{template:"<h1>AAAAAAAAAAAAA</h1>"},
    'bbb':{template:"<h1>BBBBBBBBBBBBB</h1>"}
}
```


###### 组件嵌套

应用中划分的组件可能会很多，为了更好的实现代码复用，所以必然会存在组件的嵌套关系

组件设计初衷就是要配合使用的，最常见的就是形成父子组件的关系：组件 A 在它的模板中使用了组件 B。


###### prop 传递数据

组件实例的作用域是孤立的,父组件不能直接使用子组件的数据，子组件也不能直接使用父组件的数据

父组件在模板中使用子组件的时候可以给子组件传递数据

```
  <bbb money="2"></bbb>
```
子组件需要通过props属性来接收后才能使用

```
'bbb':{
    props:['money']
```
如果父组件传递属性给子组件的时候键名有'-'，子组件接收的时候写成小驼峰的模式
```
    <bbb clothes-logo='amani' clothes-price="16.58"></bbb>
    ////
    props:['clothesLogo','clothesPrice']
```
我们可以用 v-bind 来动态地将 prop 绑定到父组件的数据。每当父组件的数据变化时，该变化也会传导给子组件


###### 单向数据流

Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。

另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。

在两种情况下，我们很容易忍不住想去修改 prop 中数据：

1. Prop 作为初始值传入后，子组件想把它当作局部数据来用；

2. Prop 作为原始数据传入，由子组件处理成其它数据输出。
对这两种情况，正确的应对方式是：

定义一个局部变量，并用 prop 的值初始化它：
```
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
//定义一个计算属性，处理 prop 的值并返回：
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```
>注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。


###### prop验证

我们可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。这对于开发给他人使用的组件非常有用

验证主要分为：类型验证、必传验证、默认值设置、自定义验证

```
props:{
    //类型验证:
    str:String,
    strs:[String,Number],
    //必传验证
    num:{
        type:Number,
        required:true
    },
    //默认数据
    bool:{
        type:Boolean,
        // default:true,
        default:function(){

            return true
        }
    },
    //自定义验证函数
    nums:{
        type:Number,
        validator: function (value) {
            return value %2 == 0
        }
    }
}
```

当父组件传递数据给子组件的时候，子组件不接收，这个数据就会挂载在子组件的模板的根节点上


##### slot

vue里提供了一种将父组件的内容和子组件的模板整合的方法：内容分发，通过slot插槽来实现

1. 匿名插槽
```
<aaa>abc</aaa>

template:"<h1><slot></slot></h1>"
```

在父组件中使用子组件的时候，在子组件标签内部写的内容，在子组件的模板中可以通过<slot></slot>来使用

2. 具名插槽

父组件在子组件标签内写的多个内容我们可以给其设置slot属性来命名，在子组件的模板通过通过使用带有name属性的slot标签来放置对应的slot，当slot不存在的时候，slot标签内写的内容就出现
```
<my-button>提交</my-button>
<my-button>重置</my-button>
<my-button></my-button>

template:"<button><slot>按钮</slot></button>"
```

##### transition

Vue提供了transition组件来帮助我们实现过渡效果，依据就是在控制元素显示隐藏的时候为dom在指定的时刻添加上对应的类名

而我们只要在这些类名里写上对应的css样式

在进入/离开的过渡中，会有 6 个 class 切换(v代表的是transition的name属性的值)。

v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。

![className](https://cn.vuejs.org/images/transition.png)

如果有多个元素需要用transition-group包裹，并且需要有key值做标记

animate.css:

引入animate.css之后，按照下面的写法：
```
<transition
    leave-active-class="animated fadeOut"
    enter-active-class="animated slideInLeft">
        <p v-if="isShow" class="box"></p>
</transition>
```


##### 渲染函数和jsx

在vue中我们可以不用template来指定组件的模板，而是用render函数来创建虚拟dom结构，用这种方法优点就是性能高，缺点就是使用成本高，代码可读性较低，可以使用jsx来在render函数中创建，这样既提高了性能，又减少了成本

但是，我们在使用了vue-cli脚手架之后，因为脚手架中有对template标签转换虚拟dom的处理，所以，不需要使用jsx，我们也能高效的转换为createElement形式

##### Vue里组件的通信

通信：传参、控制（A操控B做一个事件）、数据共享

模式：父子组件间、非父子组件

1. 父组件可以将一条数据传递给子组件，这条数据可以是动态的，父组件的数据更改的时候，子组件接收的也会变化

    子组件被动的接收父组件的数据,子组件不要再更改这条数据了


2. 父组件如果将一个引用类型的动态数据传递给子组价的时候，数据会变成双向控制的，子组件改数据的时候父组件也能接收到数据变化,因为子组件改的时候不是在改数据(地址)，而是在改数据里的内容，也就是说引用类型数据的地址始终没有变化，不算改父组件数据

    父子间数据共享（双向控制）,基本不会使用，违背了单向数据流

3. 父组件可以将一个方法传递给子组件，子组件调用这个方法的时候，就可以给父组件传递数据

    父组件被动的接收子组件的数据

4. 父组件可以将一个事件绑定在子组件的身上，这个事件的处理程序是父组件某一个方法，当子组件触发自己的这个被绑定的事件的时候，相当于触发了父组件的方法

    父组件被动的接收子组件的数据


5. 在组件间可以用过ref形成ref链，组件还拥有一个关系链（$parent,$children,$root）,通过这两种链；理论来说，任意的两个组件都可以互相访问，互相进行通信

    任意组件通信，用的少...


6. event bus  事件总线  小天使  专注于非父子组件的通信，其实父子组件也可以使用，只是没有必要

    在B组件的某个钩子函数为event_bus绑定一个事件，事件的处理程序是B想做的事情

    在A组件的某一个操作里，触发event_bus绑定的事件


7. 大量组件间数据共享的时候  vuex



##### 组件的生命周期

每一个组件或者实例都会经历一个完整的生命周期，总共分为三个阶段：初始化、运行中、销毁

![生命周期图示](https://cn.vuejs.org/images/lifecycle.png)

1. 实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行beforeCreate钩子函数，这个时候，数据还没有挂载ね，只是一个空壳，无法访问到数据和真实的dom，一般不做操作

2. 挂载数据，绑定事件等等，然后执行created函数，这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数，在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

3. 接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染，然后执行beforeMount钩子函数，在这个函数中虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

4. 接下来开始render，渲染出真实dom，然后执行mounted钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...

5. 当组件或实例的数据更改之后，会立即执行beforeUpdate，然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染，一般不做什么事儿

6. 当更新完成后，执行updated，数据已经更改完成，dom也重新render完成，可以操作更新后的虚拟dom

7. 当经过某种途径调用$destroy方法后，立即执行beforeDestroy，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等

8. 组件的数据绑定、监听...去掉后只剩下dom空壳，这个时候，执行destroyed，在这里做善后工作也可以



##### vue-cli脚手架

现在使用前端工程化开发项目是主流的趋势，也就是说，我们需要使用一些工具来搭建vue的开发环境，一般情况下我们使用webpack来搭建，在这里我们直接使用vue官方提供的，基于webpack的脚手架工具：vue-cli

安装方法：

```
# 全局安装 vue-cli
npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
vue init webpack my-project
//init之后可以定义模板的类型
# 安装依赖，走你
cd my-project
npm install
npm run dev
```

模板类型：

simple 对应的是一个超级简单的html文件

webpack 在配置的时候可以选择是否需要vue-router

注意的是，模板创建的时候会询问使用需要使用ESLINT来标准化我们的代码

在脚手架中，开发目录是src文件夹，build负责打包的，config是负责配置（内置服务器的端口、proxy代理），static是静态目录，test是测试

src中main.js是入口文件，在里面创建了一个根实例，根实例的模板就是根组件App的模板，其他的组件都在根组件里面进行嵌套实现。

每一个组件都是一个单文件组件，这种文件会被webpack利用vue-loader的工具进行编译

template部分负责写组件的模板内容，script中创建组件。style里写组件的样式

assets目录也是静态目录，在这个目标中的文件我们使用相对路径引入,而static目录中的文件使用绝对地址来引入

在style上添加scoped能使这个style里的样式只作用于当前的组件，不加scoped就是全局样式

习惯于在App.vue根组件的style里写全局样式，而每个组件的style最好都是局部的


配置sass编译环境

vue-cli没有内置sass编译，我们需要自己修改配置

1. 下载对应工具：node-sass(4.0.0) sass-loader

2. 在build目录下的webpack.base.conf.js中的module.rule里添加如下配置
```
{
    test: /\.scss$/,
    loader:'style-loader!css-loader!sass-loader'
}
```
3. 在需要使用scss代码的组件的style标签中添加 lang='scss'

##### vue-router

现在的应用都流行SPA应用（single page application）

传统的项目大多使用多页面结构，需要切换内容的时候我们往往会进行单个html文件的跳转，这个时候受网络、性能影响，浏览器会出现不定时间的空白界面，用户体验不好

单页面应用就是用户通过某些操作更改地址栏url之后，动态的进行不同模板内容的无刷新切换，用户体验好。

Vue中会使用官方提供的vue-router插件来使用单页面，原理就是通过检测地址栏变化后将对应的路由组件进行切换（卸载和安装）

###### 简单路由实现：

1. 引入vue-router，如果是在脚手架中，引入VueRouter之后，需要通过Vue.use来注册插件
```
    import Vue from 'vue'
    import Router from 'vue-router'
    Vue.use(Router)
```
2. 创建router路由器
```
    new Router(options)
```
3. 创建路由表并配置在路由器中
```
    var routes = [
        {path,component}//path为路径，component为路径对应的路由组件
    ]

    new Router({
        routes
    })
```
4. 在根实例里注入router,目的是为了让所有的组件里都能通过this.$router、this.$route来使用路由的相关功能api
```
    new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
    })
```
5. 利用router-view来指定路由切换的位置

6. 使用router-link来创建切换的工具，会渲染成a标签，添加to属性来设置要更改的path信息，且会根据当前路由的变化为a标签添加对应的router-link-active/router-link-exact-active（完全匹配成功）类名
```
<router-link to="main">main</router-link>
<router-link to="news">news</router-link>

.router-link-active{
    color:red;
}
```

###### 多级路由:

在创建路由表的时候，可以为每一个路由对象创建children属性，值为数组，在这个里面又可以配置一些路由对象来使用多级路由，注意：一级路由path前加'/'

```
const routes = [
  {path:'/main',component:AppMain},
  {path:'/news',component:AppNews,children:[
    {path:'inside',component:AppNewsInside},
    {path:'outside',component:AppNewsOutside}
  ]},
]
```

二级路由组件的切换位置依然由router-view来指定（指定在父级路由组件的模板中）

```
<router-link to='inside'>inside</router-link>
<router-link to='outside'>outside</router-link>

<router-view></router-view>
```

###### 默认路由和重定向：

当我们进入应用，默认像显示某一个路由组件，或者当我们进入某一级路由组件的时候想默认显示其某一个子路由组件，我们可以配置默认路由：
```
{path:'',component:Main}
```
当我们需要进入之后进行重定向到其他路由的时候，或者当url与路由表不匹配的时候：
```
{path:'',redirect:'/main'}
///...放在最下面
{path:'**',redirect:'/main'},
```

###### 命名路由

我们可以给路由对象配置name属性，这样的话，我们在跳转的时候直接写name:main就会快速的找到此name属性对应的路由，不需要写大量的urlpath路径了

###### 动态路由匹配

有的时候我们需要在路由跳转的时候跟上参数，路由传参的参数主要有两种：路径参数、queryString参数

路由参数需要在路由表里设置

```
{path:'/user/:id',component:User}
```
上面的代码就是给User路由配置接收id的参数，多个参数继续在后面设置

在组件中可以通过this.$route.params来使用

queryString参数不需要在路由表设置接收，直接设置？后面的内容，在路由组件中通过this.$route.query接收



###### router-link

<router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

router-link的to属性，默认写的是path（路由的路径），可以通过设置一个对象，来匹配更多
```
:to='{name:"detail",params:{id:_new.id},query:{content:_new.content}}'
```
name是要跳转的路由的名字，也可以写path来指定路径，但是用path的时候就不能使用params传参，params是传路径参数，query传queryString参数

replace属性可以控制router-link的跳转不被记录\

active-class属性可以控制路径切换的时候对应的router-link渲染的dom添加的类名

##### 编程式导航

有的时候需要在跳转前进行一些动作，router-link直接跳转，需要在方法里使用$router的方法

router.push = router-link:to
router.replace = router-link:to.replace
router.go() = window.history.go


##### 路由模式

路由有两种模式：hash、history，默认会使用hash模式，但是如果url里不想出现丑陋hash值，在new VueRouter的时候配置mode值为history来改变路由模式，本质使用H5的histroy.pushState方法来更改url，不会引起刷新，但是需要后端进行路由的配置

##### 路由钩子

在某些情况下，当路由跳转前或跳转后、进入、离开某一个路由前、后，需要做某些操作，就可以使用路由钩子来监听路由的变化

全局路由钩子：
```
router.beforeEach((to, from, next) => {
    //会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  console.log('beforeEach')
  console.log(to,from)
  //
  next()
})
//
router.afterEach((to, from) => {
    //会在任意路由跳转后执行
  console.log('afterEach')
})
```

单个路由钩子：
只有beforeEnter，在进入前执行，to参数就是当前路由
```
 routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
```

路由组件钩子：
```
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }

  ```

##### 命名视图

有时候想同时（同级）展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar（侧导航） 和 main（主内容） 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default。
```
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置（带上 s）：
```
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,//默认的，没有name的router-view
        a: Bar,
        b: Baz
      }
    }
  ]
})
```
##### prop将路由与组件解耦

在组件中接收路由参数需要this.$route.params.id,代码冗余，现在可以在路由表里配置props：true
```
{path:'detail/:id',component:AppNewsDetail,name:'detail',props:true}
```
在路由自己中可以通过props接收id参数去使用了

props:['id']




##### Axios 数据交互工具

vue官方宣布在2.0版本中不再对Vue-resource进行维护了，推荐使用axios工具

注意，axios默认配置不会设置session-cookie，需要进行配置

axios.defaults.withCredentials = true

详细请看[文档](https://www.kancloud.cn/yunye/axios/234845)

##### 响应式原理

因为vue是mvvm的框架，所以当数据变化的时候，视图会立即更新，视图层产生操作后会自动通知vm来更改model，所以我们可以实现双向数据绑定，而其中的原理就是实例会将设置的data逐个遍历利用Object.defineProperty给数据生成getter和setter，当数据变化地方时候setter会监听到并且通知对应的watcher工具进行逻辑运算会更新视图

vuex借鉴了flux和redux的思想，但是flux和redux是独立且完整的架构，vuex是耦合与vue框架的，所以使用成本要比flux、redux低



### 声明式渲染

在vue中，我们可以先在vue实例中声明数据，然后通过{{}}等方式渲染在dom中


### Vuex

Vuex是vue官方的一款状态管理工具，什么是状态呢？我们在前端开发中有一个概念：数据驱动，页面中任意的显示不同，都应该有一条数据来控制，而这条数据又叫做state，状态。

在vue中。组件间进行数据传递、通信很频繁，而父子组件和非父子组件的通信功能也比较完善，但是，唯一困难的就是多组件间的数据共享，这个问题由vuex来处理

##### Vuex的使用：

1. 创建store：

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//可以设置store管理的state/getter，mutations,actions
const store = new Vuex.Store({

})
```

2. 设置state 

>state就是一个纯对象，上面有一些状态挂载,而且一个应用应该只有一个数据源：单一状态树、唯一数据源

```
import state from './modules/state'
//可以设置store管理的state/getter，mutations,actions
const store = new Vuex.Store({
    state
})
```

3. 在根实例里配置store
>这样，我们就可以在任意的组件中通过this.$store来使用关于store的api

```
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
```

4. 在组件中使用state

因为在组件中可以通过this.$store来访问store,所以我们也可以通过this.$store.state来使用state中管理的数据

```
 data(){
    return {
        num:this.$store.state.num
    }
},
```
但是我们发现，这样使用的话，当state的数据更改的时候，vue组件并不会重新渲染,不会触发组件的相关生命周期函数

也就是说，如果想要在组件中响应式的使用的时候，我们需要通过计算属性（computed）来使用

```
computed:{
    num(){
        return this.$store.state.num
    }
}
```

这样的写法很无趣，而且如果使用的状态较多会产生冗余的感觉，所以vuex提供了mapState辅助函数，帮助我们在组件中获取并使用vuex的store中保存的状态

所以我们可以这样写：

```
computed:mapState(['num']),
```
但是如果组件中已经有了num这个数据了，而state中的数据名字也叫num就会照成冲突，这个时候我们可以在组件使用state的时候，给状态起个别名：

```
computed:mapState({
    // _num:'num',//键名为别名，值字符串代表的是真正的状态
    _num(state){//方法名为别名，函数体里还可以对真正的状态做出一些处理
        return state.num
    }
}),

```
但是，有的时候我们在组件中还有自己的业务逻辑需要用到计算属性：

```
computed:{
    a(){
        return num+1
    },
    ...mapState({
        // _num:'num',//键名为别名，值字符串代表的是真正的状态
        _num(state){//方法名为别名，函数体里还可以对真正的状态做出一些处理
            return state.num
        }
    }),
},
```

5. getters

有的时候，我们需要根据state中的某一个状态派生出一个新的状态，例如，我们state中有一个num，在某些组件中需要用到是num的二倍的一个状态，我们就可以通过getters来创建

```
const getters = {
    doublenum(state){
        return state.num*2
    }
}

```
创建了之后，在组件中通过this.$store.getters来获取里面的数据

当然vuex也提供了mapGetters辅助函数来帮助我们在组件中使用getters里的状态，且，使用的方法和mapState一模一样

5. 使用mutations更改state

我们不能直接在组件中更改state：this.$store.state.num=2,而是需要使用mutations来更改，mutations也是一个纯对象，里面包含很多更改state 的方法，这些方法的形参接收到state，在函数体里更改，这时，组件用到的数据也会更改，实现响应式。

但是我们也不能直接调用mutations 的方法，需要使用this.$store.commit来调用，第一个参数为调用的方法名，第二げ参数为传递参数

```
const mutations = {
    increment(state){
        state.num++
    }
}
```

vuex提供了mapMutations方法来帮助我们在组件中调用mutations 的方法,使用方法和mapState、mapGetters一样

6. 使用actions来处理异步操作

Action 类似于 mutation，不同在于：

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。

也就是说，如果有这样的需求：在一个异步处理之后，更改状态，我们在组件中应该先调用actions，来进行异步动作，然后由actions调用mutation来更改数据

```
const actions = {
    [CHANGE_NUM]({commit}){
        alert(1)
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)
            //调用mitations的方法

            commit(CHANGE_NUM,num)
        }, 1000);
    }
}
``
如上，actions的方法中可以进行异步的动作，且形参会接收store，从中取出commit方法用以调用mutations的方法

在组件中通过this.$store.dispatch方法调用actions的方法

当然也可以使用mapMutations来辅助使用


组件使用数据且通过异步动作更改数据的一系列事情：

1.生成store,设置state
2.在根实例中注入store
3.组件通过计算属性或者mapState来使用状态
4.用户产生操作，调用actions的方法，然后进行异步动作
5.异步动作之后，通过commit调用mutations的方法
6.mutations方法被调用后，更改state
7.state中的数据更新之后，计算属性重新执行来更改在页面中使用的状态
8.组件状态被更改...创建新的虚拟dom......
9.组件的模板更新之后重新渲染在dom中



vuex的使用：
目前市场上有两种使用vuex的情况，

第一种：将需要共享、需要管理的状态放入vuex中管理，也就是说在必要时使用

第二种：将所有的数据都交由vuex管理，由vuex来承担更多的责任，组件变得更轻量级，视图层更轻


---

##### 自定义指令

在实现回到顶部功能的时候，我们写了一个backTop组件，接下来需要通过监听window.scroll事件来控制这个组件显示隐藏

因为可能会有其他的组件会用到这样的逻辑，所以将此功能做成一个自定义指令：

根据滚动的距离控制一个数据为true还是为false（v-scroll-show）

问题：

唯一需要注意的是，在指令的钩子函数中我们可以访问到el，也就是使用指令的标签，但是我们不能直接更改value（指令的值所代表的数据）

所以我们使用引用类型来进行地址的传递来解决这个问题

接下来有写了一个v-back-top指令，就是将回到顶部功能做成一个指令，哪个组件或者dom需要使用到回到顶部，就加上这个指令就可以，设置不同的参数来控制在不同的情况下触发

##### Vue的组件库

组件库就是通用组件的集合

pc：element-ui   iview

mobile： mint-ui


##### nextTick

当我们在使用一些插件的时候，经常需要在dom更新完成后进行必要操作，但是在vue中提供的api只有updated钩子函数，而在这个函数里，任意数据的变化导致的dom更新完成都会触发，所以很可能会造成无关数据的影响，而使用监听的话只能监听到数据的变化，此时dom还没有更新，我们只能强行使用setTimeout来处理

这里推荐大家使用nextTick全局方法：
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

eq:
getBillBoards(){
    axios.get(this.$root.config.host+'mz/v4/api/billboard/home',{
        params:{__t:Date.now()}
    }).then(res => {
        console.log(res.data.data.billboards)
        this.billboards = res.data.data.billboards

        //当数据更新，dom循环完成后，执行回调
        Vue.nextTick(function () {
            new Swiper('.app-home-banner',{
                loop:true
            }) 
        })
    })
}

##### keep-alive

在component组件、router-view外面包裹上keep-alive的话，就会对组件进行缓存，当切换回来的时候，组件会立即渲染，理论来说，切换组件的时候其实会把上一个组件销毁，使用了keep-alive则不会

设置include、exclude属性控制有选择的缓存

include匹配到的组件会被缓存，exclude匹配到的不会被缓存

值可以为逗号隔开的字符串include = 'a,b';正则:include = '/a|b/';数组:include=['a','b']

使用keep-alive缓存的组件连带它的子组件们都会拥有activated、deactivated钩子函数，会在切换回来和要切换出去的时候触发

比如，main做了缓存，但是main的banner我们希望每次都去重新获取数据，所以就在banner的activated里获取数据


### Vue试题分析

1. v-for可以实现数据遍历显示，不仅可以遍历数组，也可以遍历对象，还可以从数值中取值：

v-for='n in 10' n会打印1-10

2. vue的生命周期钩子：

通用：beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroyed

路由守卫：beforeRouteEnter/beforeRouteUpdate (2.2 新增)/beforeRouteLeave

keep-alive:activated/deactivated

3. v-if v-show

v-if是真正的条件渲染，会确保在切换中条件块内的事件监听、子组件都会适当的被销毁和重建

v-show总是将节点渲染在dom中，只是基于css：display来控制节点的显示和隐藏

v-if有更高的切换开始，v-show有更高的初始渲染开销

v-if是惰性的，初始条件为假，就不会渲染

4. axios相关

axios请求的时候不会带上cookie，不会影响带宽，可以通过withCredentials：true来设置

对axios 的请求头进行设置：

axios.defaults.headers = {'Content-Type':'...'}

vue2.0不在更新维护vue-resource，官方推荐使用axios

axios拦截器可以拦截请求和响应，在then、catch之前拦截


6. 组件实例的作用域是孤立的，意味着不能（不应该）在子组件模板里直接引用父组件的数据，要让子组件使用父组件数据的话，需要通过props来将父组件的数据传递给子组件，子组件不能也不应该修改父组件传入的数据，但是可以通过传入引用类型的数据来实现数据共享

7.为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发 (即 Angular 用户熟知的“transclusion”)。Vue.js 实现了一个内容分发 API，参照了当前 Web Components 规范草案，使用特殊的 <slot> 元素作为原始内容的插槽。

a-template:

<p>hello world</p>
<b>
	<h1>hello world</h1>
</b>

b-template:

<slot></slot>

....

8. 如果把切换出去的组件保存在内存中，保留状态避免重新渲染，可以使用keep-alive

include exclude 

9. 注册方式：

全局：Vue.component(name,Vue.extend({}))

局部：{ components:{name:Vue.extend({})} }

10. 事件总线实现非父子组件通信

//创建bus

let bus = new Vue()

//a

new Vue({
	template:'...',
	mounted(){
		bus.$on('emit-a',function(){
			alert(1)
		})
	}
})

//b

new Vue({
	template:'...',
	methods:{
		emitA(){
			bus.$emit('emit-a')
		}
	}
})
//当b组件的emitA方法被调用的时候，A组件就会执行alert（1）

11. methods和计算属性的区别

假设我们有一个数据为num，还希望拥有一个数据为doublenum，而且希望doublenum的值永远都是num的二倍

方法：

	* 因为是直接显示在模板中，也就是说，我们可以来一个doublenum的方法，这个方法返回num的二倍，将这个方法放到模板中的某个地方执行 {{doublenum()}}
	  但是，当无关的例如一个str的数据更改的时候，组件会重新创建虚拟dom树，与上一次的虚拟dom树对比之后重新渲染，这个时候在重新渲染模板的时候doublenum函数会被再次的调用，造成不必要的性能浪费
	  
	* 创建一个doublenum数据，使其初始值为num的二倍，然后利用watch来监听这两个数据，在改变的时候更改对应的数据，但是需要初始的为doublenum赋值为num的二倍，如果num是动态获取到的，doublenun赋值会更繁琐
	
	* computed计算数据，我们可以利用computed来创建一条新的doublenum数据。并且设置它的getter和setter，并与num建立关系,且computed会缓存，在重新渲染的时候，不会重新执行getter和setter
	
	computed:{
		doublenum:{
			get(){
				return this.num*2
			},
			set(val){
				this.num = val/2
			}
		}
	}


12. 绑定class的对象语法和数组语法

<a :class="{a:true,b:false,c:1}"> => </a> => <a class='a c'></a>
	
data(){
	return {
		c:'c'
	}
}
<a :class = '["a","b",c]'></a> => </a> => <a class='a b c'></a>


13. 

	new Vue({
		el:"#example-3",
		methods:{
			say(str){
				alert(str)
			}
		}
	})

14. 单向数据流

prop是单向绑定的，父组件属性变化，传递给子组件，但是，子组件数据变化，不能直接传递给父组件，也就是数据的流行是从父组件流向子组件的，为了防止子组件修改父组件的数据（会让应用的数据流变的更难开发、更新、维护）

使用了vuex工具的时候，store中数据在组件中使用的过程也是单向数据流，state->vue component->actions->mutations->state->vue component


15. this.$router.push/replace({name:'user',params:{userId:1})

	this.$router.push/replace({path:'/register',query:{plan:private})
	
	
##### key相关

当数据改变之后，vue会创建新的虚拟dom来和原来的虚拟dom做对比，在创建新的虚拟的dom的时候，会根据key来查找在原来的虚拟dom中有没有某个部分，如果原来的有，这次的也需要，就会实现复用，而且在做diff对比的时候，如果有key会加快对比的查找速度，提高性能

尽量循环的时候不要将key设置为数组的索引，因为当删除某一个元素的时候，就会导致删除位置下面的所有元素的key值都与上一次虚拟dom的key值不同，导致复用失败，这个时候我们最好使用关键的唯一的，例如id这样的数据作为key

如果数据变化只是值的变化而不是条数和位置的变化，可以使用索引作为key

##### Vue.use()

Vue.use会查找插件对象里的install方法去执行,并且给install方法里传入Vue对象


var a = {
    install(Vue){
        Vue.component("my-a",{...})
    }
}

Vue.use(a)

##### 进入域后根据不同的情况显示不同的页面（PC/MOBILE）

很多情况下，一个应用会有PC和移动端两个版本，而这两个版本因为差别大，内容多，所以不能用响应式开发但是单独开发，而域名只有一个，用户进入域后直接返回对应设备的应用，做法主要有两种：

1. 前端判断并跳转

    进入一个应用或者一个空白页面后，通过navigator.userAgent来判断用户访问的设备类型，进行跳转

2. 后端判断并响应对应的应用

    用户地址栏进入域的时候，服务器能接收到请求头上包含的userAgent信息，判断之后返回对应应用

---

    function foo(){// 第16行
        getName = function(){console.log(1)}
        return this
    }
    foo.getName = function(){console.log(2)}
    foo.prototype.getName = function(){console.log(3)}
    var getName = function(){console.log(4)}
    function getName(){console.log(5)}


    foo.getName()//2
    //foo是一个函数，也可以说是一个对象，所以它也可以挂载一些属性和方法，18行在其上挂载了一个getName方法
    //执行的结果是
    
    getName()//4
    //21行有一个全局函数，全局函数声明提前后被20行的getName覆盖，所以输出4

    foo().getName()//1
    //foo()执行完成后，将全局的getName也就是window.getName给更改后返回this，而在这里this执行的就是window，所以最后执行的就是window.getName，所以输出1

    getName()//1
    //在上面已经更改全局的getName，所以依然是1

    new foo.getName()//2
    //new 操作符在实例化构造器的时候，会执行构造器函数，也就是说，foo.getName会执行，输出2

    new foo().getName()//3
    //new操作符的优先级较高，所以会先new foo()得到一个实例，然后再执行实例的getName方法,这个时候，实例的构造器里没有getName方法，就会执行构造器原型上的getName方法

    new new foo().getName()//3
    //先执行new foo()得到一个实例，然后在new 这个实例的getName方法,这个时候会执行这个方法，所以输出3

    //除了本地对象的方法，其他的函数都能new

---



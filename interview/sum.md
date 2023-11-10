## 框架

## 技术
### 尾递归
- [尾调用优化(尾递归)](http://ruanyifeng.com/blog/2015/04/tail-call.html)
- 尾调用 函数的最后一步是调用另一个函数
- 尾调用优化 
    > 函数调用形成调用帧 _call frame_, 多个调用记录行程调用栈 _call stack_ 
    > 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了
    ```
        function f() {
            let m = 1;
            let n = 2;
            return g(m + n);
        }
        f();
        // 等同于
        function f() {
            return g(3);
        }
        f();

        // 等同于
        g(3);
    ```
    >"尾调用优化"（Tail call optimization），即只保留内层函数的调用记录。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用记录只有一项，这将大大节省内存。
 - 尾递归 函数最后一步调用自身就是尾递归
 - 尾递归改写
    ```
    function factorial(n) {
        if (n === 1) return 1;
        return n * factorial(n - 1);
    }
    actorial(5) // 120
    ```
    - 方法一是在尾递归函数之外，再提供一个正常形式的函数
    ```
    function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }
    function factorial(n) {
        return tailFactorial(n, 1);
    }
    factorial(5) // 120
    ```
    - 方法二采用ES6的函数默认值
    ```
    function factorial(n, total = 1) {
        if (n === 1) return total;
        return factorial(n - 1, n * total);
    }
    factorial(5) // 120
    ```
    - 柯里化
    ```
    function currying(fn, n) {
        return function (m) {
            return fn.call(this, m, n);
        };
    }
    function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }
    const factorial = currying(tailFactorial, 1);
    factorial(5) // 120
    ```
### 箭头函数和普通函数this区别
 - this:
   - 普通函数：调用包含自己函数对应的对象
   - 箭头函数：定义该函数时所在的作用域指向的对象
   - call,bind,apply不能改变箭头函数的this
 - 箭头函数没有arguments，也没有prototype属性，所以不能用new关键字调用箭头函数。
 - 箭头函数不可以当做构造函数。

### vue2/3的区别
 - 生命周期：Vue3 在组合式API（Composition API，下面展开）中使用生命周期钩子时需要先引入，而 Vue2 在选项API（Options API）中可以直接调用生命周期钩子
 - 多根节点：vue2 模板中如果使用多个根节点时会报错；vue3不会
 - 组合式api：
   - Vue2 是选项API（Options API），一个逻辑会散乱在文件不同位置（data、props、computed、watch、生命周期钩子等），导致代码的可读性变差。当需要修改某个逻辑时，需要上下来回跳转文件位置。
   - Vue3 组合式API（Composition API）则很好地解决了这个问题，可将同一逻辑的内容写到一起，增强了代码的可读性、内聚性，其还提供了较为完美的逻辑复用性方案。
 - 异步组件：允许程序在等待异步组件加载完成前渲染兜底的内容，使用它，需在模板中声明，并包括两个命名插槽：default 和 fallback。Suspense 确保加载完异步内容时显示默认插槽，并将 fallback 插槽用作加载状态。
 - Teleport：Vue3 提供 Teleport 组件可将部分 DOM 移动到 Vue app 之外的位置。比如项目中常见的 Dialog 弹窗。
 - 响应式原理：Vue2 响应式原理基础是 Object.defineProperty；Vue3 响应式原理基础是 Proxy。

### forEach for...in for...of原理

### 前端项目优化举例
 - 防抖&节流
 - 图片懒加载
 - 首屏优化
   - 三方库放到CDN
 - 路由懒加载
 - ui库按需加载
 - svg替换图片
 - 骨架屏

### 柯里化
 - 柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的新函数
 - 这是一种对函数参数的缓存(延迟执行)  
 - 让函数变得更加灵活，让函数的粒度更小

### 严格模式
 - 严格模式 的使用很简单，只有在代码首部加入字符串 “use strict”。有两种应用场景，一种是全局模式，一种是局部模式。
 - 变量必须声明后再使用
 - 函数的参数不能有同名属性，否则报错
 - 不能使用with语句
 - 不能对只读属性赋值，否则报错
 - 不能使用前缀 0 表示八进制数，否则报错
 - 不能删除不可删除的属性，否则报错
 - 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
 - eval不会在它的外层作用域引入变量
 - eval和arguments不能被重新赋值
 - arguments不会自动反映函数参数的变化
 - 不能使用arguments.callee
 - 不能使用arguments.caller
 - 禁止this指向全局对象
 - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
 - 增加了保留字（比如protected、static和interface）
  
### ES6新增
 - symbol:Object，String，Boolean，Number，Null，Undefined、Array、Function 新增了 symbol 表示独一无二的
 - let 和 const
 - 解构赋值：iterable对象
 - Map & Set
   - map与object区别：
     - object的键只能是字符串或ES6的symbol值，而Map可以是任何值。
     - Map对象有一个size属性，存储了键值对的个数，而object对象没有类似属性。
 - 创建对象直接使用变量名作为属性，函数体作为方法
 - 字符串&数组增加新方法
 - 函数默认值
 - 不定参
 - 箭头函数
 - class 类 本质是函数
 - 类的继承
 - 导入导出 import/export vs require/export module
 - 新增异步方法promise/Generator

### 多浏览器多版本浏览器兼容
babel

### for循环原理
```
for(语句1;语句2;语句3){
    被执行的代码块
}
```
语句1：在循环（代码块）开始前执行，通常用来初始化循环中的变量（任意个）。
语句2：定义运行循环（代码块）的条件，用来评估初始变量的条件，如果语句 2 返回 true，则循环再次开始，如果返回 false，则循环将结束。
语句3：在循环（代码块）已被执行之后执行，用来增加初始变量的值。

```
for(var s in obj){//obj为对象
    console.log(s,obj[s]);//打印出obj内的属性名和属性值  
}
```

```
for (val of iterator) {

}
```
1. 首先调用(for…of…)的对象的属性里必须有一个函数，它的函数名必须为Symbol.iterator；
2. 该函数的返回值必须为一个对象，且对象内包含一个next()函数；
3. next()函数也必须有一个返回值，返回值类型也为一个对象。其包含两个属性：done和value。
4. 程序会根据该对象的done来处理后续行为，如果done为false，则把该对象的value赋值给of前面的变量。否则就会继续调用next，直至done为true再终止。

### type 和 interface 区别
 - 相同点
   - 都可以用来定义一个类型
   - 可以扩展其他类型
  
- 不同点
  - type 可以定义基本类型、联合类型、元组和函数等类型；interface 只能定义对象类型。
  - type 只能定义一次，如果多次定义会覆盖之前的定义；interface 可以定义多次，最终会被合并。
  - type 可以使用 typeof 操作符获取一个变量的类型；interface 不能使用这种方式。

### vue-router导航守卫
 - 导航被触发。
 - 在失活的组件里调用 beforeRouteLeave 守卫。
 - 调用全局的 beforeEach 守卫。
 - 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
 - 在路由配置里调用 beforeEnter。
 - 解析异步路由组件。
 - 在被激活的组件里调用 beforeRouteEnter。
 - 调用全局的 beforeResolve 守卫(2.5+)。
 - 导航被确认。
 - 调用全局的 afterEach 钩子。
 - 触发 DOM 更新。
 - 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### hash模式和history模式区别
Hash 模式：
在 hash 模式下，URL 中的 hash 符号（#）被用来表示路由的路径。例如：

http://example.com/#/home
通过 hash 模式，路由的变化不会引起页面的刷新，而只是 URL 中的 hash 部分的改变。这是因为 hash 的改变不会触发浏览器向服务器发送请求，所以应用可以完全在前端处理路由。

优点：支持在不同的浏览器和服务器环境下的部署，并且不需要后端配置支持。
缺点：URL 中包含 # 符号，不太美观；在一些带有锚点跳转的页面中，可能会与 hash 路由冲突。

History 模式：
在 history 模式下，通过利用 HTML5 History API，路由的路径会直接显示在 URL 中，不再使用类似 hash 的形式。例如：

http://example.com/home
通过 history 模式，路由的变化会修改浏览器的历史记录，并且可以通过后退和前进按钮进行导航。

优点：URL 更加简洁美观，没有 # 符号；用户体验更加好，可以通过浏览器的前进和后退按钮导航路由。
缺点：需要后端服务器配置支持，以确保在刷新页面时能正确返回前端路由；在开发环境中可能需要一些额外的配置。

### array vs tuple
Array（数组）是一种可变长度且元素类型一致的数据集合
Tuple（元组）是一种固定长度且每个位置的元素类型可不同的数据集合。

### webpack
entry：一个可执行模块或者库的入口。
chunk：多个文件组成一个代码块。可以将可执行的模块和他所依赖的模块组合成一个chunk，这是打包。
loader：文件转换器。例如把es6转为es5，scss转为css等
plugin：扩展webpack功能的插件。在webpack构建的生命周期节点上加入扩展hook，添加功能。
output：编译结果文件输出

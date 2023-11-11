## 框架

## 技术
### 尾递归
- [ ] [尾调用优化(尾递归)](http://ruanyifeng.com/blog/2015/04/tail-call.html)
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
 - 普通函数：调用包含自己函数对应的对象
 - 箭头函数：定义该函数时所在的作用域指向的对象
箭头函数内部不可以使用arguments对象。
箭头函数不可以当做构造函数。

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

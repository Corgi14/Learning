## 框架

## 技术
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
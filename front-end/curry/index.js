function add(a, b, c, d) {
    return a * b * c * d
}



console.log(add(1,2,3,4))

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...moreArgs) {
               return curried.apply(this, args.concat(moreArgs))
            }
        }
    }
}

let mCurry = curry(add)
console.log(mCurry(1)(2)(3)(4))
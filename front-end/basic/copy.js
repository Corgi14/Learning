{
    function checkType(any) {
        return Object.prototype.toString.call(any).slice(8, -1)
    }

    function clone(any) {
        let type = checkType(any)
        if (type === 'Object') {
            let o = {}
            for (let key in any) {
                o[key] = clone(any[key])
            }
            return o
        } else if (type === 'Array') {
            let arr = []
            for (let i = 0, length = any.length; i < length; i++) {
                arr[i] = clone(any[i])
            }
            return arr
        } else if (type === 'Function') {
            return new Function('return ' + any.toString()).call(this)
        } else if (type === 'Date') {
            return new Date(any.valueOf())
        } else if (type === 'RegExp') {
            return new RegExp(any)
        } else if (type === 'Map') {
            let m = new Map()
            any.forEach((value, key) => {
                m.set(key, clone(value))
            });
            return m
        } else if (type === 'Set') {
            let s = new Set()
            for (let val of any.values()) {
                s.add(clone(val))
            }
            return s
        }

        return any
    }
    let o1 = {
        f() {
            return 'f'
        }
    }
    let ooo = {
        a: 'a',
    };

    co = clone(ooo)
    console.log(ooo)
    console.log(co)
    console.log(ooo === co)
}
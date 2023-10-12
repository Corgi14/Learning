{//尾递归
    function sumArray(arr, sum = 0) {
        if (arr.length === 1) {
            return sum
        }
        return sumArray(arr, sum + arr.pop())
    }

    // console.log(sumArray([1, 2, 3]))
}
{//箭头函数
    function foo() {
        console.log(this)
        console.log(this.id)
        // setTimeout(() => {
        //     console.log('id: ', this.id)
        // }, 1000)
        setTimeout(function () {
            // console.log(this)
            console.log('id: ', this.id)
        }, 1000)
    }

    var id = 21

    // foo()
}

{
    let arr = new Array(999999).fill(0)
    console.time('forTime')

    for(let i = 0; i < arr.length; i++) {}
    console.timeEnd('forTime')

    console.time('whileTime')
    let i = 0
    while(i < arr.length) {
        i++
    }
    console.timeEnd('whileTime')

    console.time('forEachTime')
    arr.forEach(item => {})
    console.timeEnd('forEachTime')
    
}



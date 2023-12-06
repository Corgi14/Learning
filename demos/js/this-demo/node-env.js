
function fun() {
    console.log(this === global)
    console.log(this === globalThis)
    // console.log(global)
    // console.log(globalThis)
    console.log(this.s)
}
const b = () => {
    console.log(this)
    console.log(this.s)
}
var obj = {
    s: '1',
    f: fun,
    a: b,
}

this.s = '3'

// obj.f()
obj.a()
fun()

const promise = new Promise((resolve,reject)=>{
    console.log(1);
    resolve();
    console.log(2);
    reject()
})
setTimeout(()=>{console.log(5)},0)
promise.then(()=>{console.log(3)})
.then(()=>{console.log(6)})
.catch(()=>{console.log(7)})
console.log(4)
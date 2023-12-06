console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000);
const p = new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    console.log(4)
})
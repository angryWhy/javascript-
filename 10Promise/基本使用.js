// 概念:promise是一个类

// 通过new 创建Promise对象时候，需要传入回调函数

// 回调函数会立即执行，并且会传入另外两个回调函数resolve，reject

// 当我们调用resolve回调函数的时候，回执行promise   then方法传入的回调函数

// 当我们调用reject回调函数的时候，回执行promise   catch方法传入的回调函数
class Person {
    constructor(callback) {
        let fn1 = () => { }
        let fn2 = () => { }
        callback(fn1, fn2)
    }
}
//传入构造器的函数会被立即执行
const p = new Person((fn1, fn2) => {
    fn1()
    fn2()
})
function foo() {
    return new Promise((resolve, reject) => {
        resolve()
        reject()
    })
}
const promise = foo()
//执行resolve
promise.then(() => { })
//执行reject
promise.catch(() => { })
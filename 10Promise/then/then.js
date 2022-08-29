const promise = new Promise((resolve, reject) => {
    resolve("hahah")
})
promise.then(res => {
    //resolve的值
    console.log(res);
})

// ①：返回的是普通的值，会被作为新的promise的resolve值
promise.then(res => {
    return "haha"
    //相当于，包裹一层promise
    return new Promise((resolve, reject) => {
        resolve("haha")
    })
})

// ②：返回的是promise
promise.then(res => {
    //相当于包裹一层promise，promise 包裹 return new Promise 发生了状态移交
    return new Promise((resolve, reject) => {
        settimeout(() => { resolve("haha") }, 1000)
    })
})

// ③：返回的是Object，实现了then方法
promise.then(res => {
    //相当于包裹一层promise，promise 包裹 return new Promise 发生了状态移交
    return {
        then: function () {
            resolve("haha")
        }
    }
}).then(res => { console.log(res) })
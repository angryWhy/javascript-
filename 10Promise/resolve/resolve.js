

//resolve参数形式

//方式一：普通的值或者是对象
new Promise((resolve, reject) => {
    resolve("hello")
}).then(res => {
    console.log(res);
})
//方式二：promise
//当前状态会由传入的promise决定
//当前的promise状态会进行移交，传入的决定
const p = new Promise((resolve, reject) => {
    resolve("我是新的状态")
})
new Promise((resolve, reject) => {
    resolve(p)
}).then(res => {
    console.log(res);
})
//方式三：传入一个对象，该对象也实现了then方法，由该then方法决定状态
new Promise((resolve, reject) => {
    const obj = {
        then: function (resolve, reject) {
            resolve("移交状态：对象then方法")
        }
    }
    resolve(obj)
}).then(res => {
    console.log(res);
})
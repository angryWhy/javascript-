//也是相当于tehn方法，返回值
//方式一:then第二个回调函数
const promise = new Promise((resolve, reject) => {
    throw new Error("err")
}).then(undefined, err => {
    console.log(err);
})
//方式二:catch
const promise2 = new Promise((resolve, reject) => {
    throw new Error("err")
}).catch(err => {
    console.log(err);
})

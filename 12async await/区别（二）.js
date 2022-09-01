// 异步函数的异常，会被作为异步函数返回的promise的reject值
async function foo() {
    throw new Error("error message")
}
const promise = foo()
promise.catch(err => {
    console.log(err)
})
// async函数内部可以使用await关键字，普通函数不可以

// await后面跟表达式，表达式会返回一个promise

// await会等到promise为fullfield状态时，继续执行异步函数
function foo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hall")
        }, 5000);
    })
}
async function get() {
    //阻塞执行，等有结果才会执行下面的任务
    const res = await foo()
    console.log(`----------`);
}
get()


//跟上其他的值
async function bar() {
    const res1 = await {
        then: function (resolve, reject) {
            resolve("aaa")
        }
    }
    console.log(res1);
}
bar()

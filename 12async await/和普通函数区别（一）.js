async function foo() {
    console.log(`1`);
    console.log(`中间代码`);
    console.log(`2`);
    //默认返回undefined
    return "hello"
}
const promise = foo()
promise.then(res => {
    console.log(`then 代码执行`);
    console.log(res)//"hello"
})
//也是三种情况
//普通值
async function foo() {
    console.log(`1`);
    console.log(`中间代码`);
    console.log(`2`);
    //默认返回undefined
    return "hello"
}
//对象then方法
async function foo() {
    console.log(`1`);
    console.log(`中间代码`);
    console.log(`2`);
    //默认返回undefined
    return {
        then: function (resolve, reject) {
            resolve("res")
        }
    }
}
//新的promise
async function foo2() {
    console.log(`1`);
    console.log(`中间代码`);
    console.log(`2`);
    //默认返回undefined
    return new Promise((resolve, reject) => {
        resolve("haha")
    })
}
const promise2 = foo2()
promise2.then(res => {
    console.log(res)//"haha"
})
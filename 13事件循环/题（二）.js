async function bar() {
    console.log(`2222`);
    return new Promise(resolve => {
        resolve()
    })
}
async function foo() {
    console.log(`11111`);
    await bar()
    console.log(`33333`);
}

foo()

console.log(`44444`);

async function async1() {
    console.log(`async---1 start`);
    await async2()
    console.log(`async---1 end`);
}
async function async2() {
    console.log("async---2");
}
console.log("script start");
setTimeout(() => {
    console.log("settimeout");
}, 0);
async1()
new Promise(function (resolve) {
    console.log("promise1");
    resolve()
}).then(function () {
    console.log("promise2");
})

console.log("script end");
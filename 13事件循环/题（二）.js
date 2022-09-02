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
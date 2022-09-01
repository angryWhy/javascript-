//回调
setTimeout(() => {
    console.log(`callback`);
}, 500);
//回调
queueMicrotask(() => {
    console.log(`callback`);
})
//回调
Promise.resolve().then(res => {
    console.log(`callback`);
})


//执行不会经过事件队列，直接执行
function bar(params) {

}
function foo(params) {

}
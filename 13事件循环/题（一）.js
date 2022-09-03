setTimeout(() => {
    console.log(`settimeout---1`);
    new Promise(resolve => {
        resolve()
    }).then(function () {
        new Promise(resolve => {
            resolve()
        }).then(
            function () {
                console.log("then---4");
            }
        )
        console.log("then---2");
    })
});

new Promise(function (resolve) {
    console.log("promise---1");
    resolve()
}).then(function () {
    console.log("then---1");
})

setTimeout(() => {
    console.log(`settimeout---2`);
});
console.log(`2`);
queueMicrotask(() => {
    console.log(`quequeMicrotask---1`);
})
new Promise(function (resolve) {
    resolve()
}).then(function () {
    console.log("then---3");
})

//主代码：

//微："then---1" `quequeMicrotask---1` "then---3" //settimeout1：微任务 then

//宏： settimeout---1`  `settimeout---2`

//结果：
// "promise---1"
// `2`
// "then---1"
// `quequeMicrotask---1`
// "then---3"
// `settimeout---1`
// "then---2"
// "then---4"
//`settimeout---2`

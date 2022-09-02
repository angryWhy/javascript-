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
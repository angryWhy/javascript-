new Promise((resolve, reject) => {
    resolve("hello")
}).then(res => {
    console.log(res);
}).finally(function () {
    // 返回状态为 (resolved 或 rejected)
})
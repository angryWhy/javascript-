// pending:悬而未决的，当传入new Promise构造器的函数执行的时候，进入pending状态

// fullfield:执行完成功，传入构造器函数的resovle函数执行，状态变更

// reject:执行完，拒绝的，传入构造器函数的reject函数执行，状态变更
new Promise((resolve, reject) => {
    console.log("这里代码立即执行的")
    //成功调用resolve
    //失败调用reject
}).then(
    res => { },
    err => { }
)
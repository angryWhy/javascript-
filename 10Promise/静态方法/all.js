// Promise.all() 方法接收一个 promise 的 数组的输入，并且只返回一个[`Promise`]

// 都成功返回结果，有一个reject就返回
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
//  [3, 42, "foo"]
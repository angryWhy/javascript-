//异步函数里，如果没有特殊情况，和普通代码执行一样
async function foo() {
    console.log(`内部代码执行1`);
    console.log(`内部代码执行2`);
    console.log(`内部代码执行3`);
}
console.log(`script执行`);
foo()
console.log(`script结束`);
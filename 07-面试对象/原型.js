function foo() { }
foo.prototype = {
    //指向函数本身
    constructor: foo,
    name: "hell",
    sex: "men"
}
//使constructor不可枚举
Object.defineProperty(foo.prototype, "constructor", {
    enumerable: false,
    configurable: true
})
var obj = {
    name: "hello",
    age: "pengpeng"
}
//原型式继承函数
function createObject(o) {
    var obj = {}
    Object.setPrototypeOf(obj, o)
    return obj
}

function createObject2(o) {
    function fn() { }
    fn.prototype = o
    return new fn()
}


var info = createObject(obj)
console.log(info);
console.log(info.__proto__);
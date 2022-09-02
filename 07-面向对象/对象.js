const obj = {
    name: "hello"
}

Object.defineProperty(obj, "name", {
    //可删除，可修改？？？
    configurable: true,
    //值
    value: "world",
    //是否枚举
    enumerable: true,
    //是否可修改
    writable: true,
    get: function () {
        return "getter方法"
    },
    set: function () {
        this.name = "setter方法"
    }
})
//阻止对象扩展，添加新属性
Object.preventExtensions(obj)
//禁止对象配置/删除属性
Object.seal(obj)
//不可修改
Object.freeze(obj)
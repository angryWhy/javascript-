const obj = {
    name: "hell",
    sex: "men"
}
//{}不添加任何监听操作
const proxyObject = new Proxy(obj, {
    get: function (target, key) {
        //返回对顶的值
        return target[key]
    },
    set: function (target, key, value) {
        //设置新的值
        target[key] = value
    },
    //对象key的in操作(in)
    has: function (target, key) {
        console.log(`for in操作`, target[key]);
        return key in target
    },
    deleteProperty: function (target, key) {
        console.log(`delete操作`, target[key]);
        delete target[key]
    },

})

//对应的obj也会被修改
proxyObject.name = "newName"

//in操作符
console.log("name" in obj);



//函数
function foo(params) {

}
const proxyFoo = new Proxy(foo, {
    //是函数！！！
    apply: function (target, thisArg, params) {
        console.log(`apply操作`);
        return target.apply(thisArg, params)
    },
    construct: function (target, argArr) {
        return new target(argArr)
    }
})
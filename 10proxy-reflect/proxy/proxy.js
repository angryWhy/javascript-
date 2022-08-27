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
    }
})

//对应的obj也会被修改
proxyObject.name = "newName"
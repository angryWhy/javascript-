const obj = {
    __name: "hell",
    __sex: "men",
    get name() {
        //this为obj
        return this.__name
    },
    set name(value) {
        //this为obj
        this.__name = value
    }
}

const proxyObject = new Proxy(obj, {
    get: function (target, key) {
        //返回对顶的值
        console.log(`get访问`, key);
        return Reflect.get(target, key)
    },
    set: function (target, key, value) {
        //设置新的值
        Reflect.set(target, key, value)
    }
})
//当我们打印的时候
//只会打印一次,只针对name的get方法拦截，没有对__name拦截
//目标：更改obj的get或set方法的this，指向代理对象

//receiver是改变原对象的this(get 或set)----receiver（代理对象）
const proxyObject2 = new Proxy(obj, {
    get: function (target, key) {
        //返回对顶的值
        console.log(`get访问`, key);
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value) {
        //设置新的值
        Reflect.set(target, key, value, receiver)
    }
})
Function.prototype.applydemo = function (thisArg, params) {
    //this，指向当前函数
    var fn = this
    //自己调用，执行，相当于没传参数
    fn()

    thisArg = thisArg ? Object(thisArg) : window
    //传入要绑定对象，上面添加属性为fn（当前的fn）
    thisArg.thisfn = fn
    //隐式绑定，参数调用这个fn
    params = params || []
    var res = thisArg.thisfn(...params)
    return res
}
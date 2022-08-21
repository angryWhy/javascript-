Function.prototype.bindDemo = function (thisArg, ...argwarap) {
    var fn = this
    function proxyFn(...args) {
        thisArg.fn = fn
        var result = thisArg.fn(...argwarap, ...args)
        return result
    }
    return proxyFn
}
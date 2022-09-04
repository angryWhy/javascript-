
//浅拷贝
function shallowClone(origin) {
    const newObj = {}
    for (key in origin) {
        newObj[key] = origin[key]
    }
}

//深拷贝
function isObject(value) {
    const type = typeof value
    return (value != null) && (value === "object" || value === "function")
}
function deepClone(origin) {
    if (!isObject(origin)) return
    const newObj = {}
    for (key in origin) {
        newObj[key] = deepClone(origin[key])
    }
    return newObj
}
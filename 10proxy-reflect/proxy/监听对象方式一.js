const obj = {
    name: "hello",
    sex: "22"
}

Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
        get: () => {
            console.log(`${key}取值`);
            return value
        },
        set: (newValue) => {
            console.log(`${key}设置值`);
            value = newValue
        }
    })
})
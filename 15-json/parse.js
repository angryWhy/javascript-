//直接使用
const obj = {
    name: "obj",
    sex: "men"
}
//转换成josn格式
const str = JSON.stringify(obj)

//转换回进行拦截
const str1 = JSON.parse(str, (key, value) => {
    if (key === "name") {
        return "haha"
    }
    return value
})
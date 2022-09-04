//直接使用
const obj = {
    name: "obj",
    sex: "men"
}
//转换成josn格式
const str = JSON.stringify(obj)


//情况二
//传入数组，设定那些需要转换
const str2 = JSON.stringify(obj, ["name"])
//传入回调函数
const str3 = JSON.stringify(obj, (key, value) => {
    if (key === "sex") {
        return "women"
    }
    return value
})
//第三个参数,转换格式
const str4 = JSON.stringify(obj, null, 4)
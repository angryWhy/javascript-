const obj = {
    name: "obj",
    sex: "men"
}
//转换成josn格式
const str = JSON.stringify(obj)
//存到localstorge里面
localStorage.setItem("obj", str)
//获取
const o = JSON.parse(localStorage.getItem("obj"))
var obj = {
    sex: "men"
}
function createObj(name, age) {
    var newObj = Object.create(obj)
    newObj.name = name
    newObj.age = age
}

var stu = createObj("he", 20)
var stu2 = createObj("he1", 21)
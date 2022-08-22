var obj = {
    name: "why",
    age: 18
}

//[[get操作]]
//当前对象查找属性
//没找到，从原型上去找,原型链__proto__

obj.__proto__ = {}
console.log(obj.address);

//原型对象上也有原型对象

//也有对应的原型对象
// obj.__proto__ = {
//     __proto__: {}
// }
obj.__proto__.__proto__ = {
    sex: "men"
}
console.log(obj.sex);
//创建一个对象，并且浏览器添加一个原型对象赋值为{}
var obj = { name: "hello", __proto__: {} }
//当我们从对象中获取值，触发get操作
//1.先从当前自身上找，找到就使用
//2.没找到，从原型上去找
var obj = {
    name: "gaga"
}
//没有age
console.log(obj.age)//err
//原型上添加
obj.__proto__.age = 20
console.log(obj.age)//ok
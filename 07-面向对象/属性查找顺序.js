function bar() { }
const p1 = new Bar()
p1.name
//自身属性上找，未找到，原型去寻找

//方法一：
p1.__proto__.name = "hello"
//相当于在p1的__proto__，上添加name属性，并且指向prototype上也有name属性
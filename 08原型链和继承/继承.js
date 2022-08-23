//顶层父类
function Person() {
    this.name = "hell"
}
Person.prototype.run = function () {
    console.log(this.name + 'run');
}
//子类
function Student() {
    this.sn = "111"
}
var p = new Person()
Student.prototype = p
Student.prototype.eat = function () {
    console.log(this.sn + 'eat');
}
var stu = new Student()


//1.有些属性看不到
console.log(stu)
//person {sn:"111"}，继承的属性无法看到
//2.修改对象上的属性，不会影响，----获取引用修改，会相互影响
stu.sex = "men"//相当于给本对象添加属性，不会从原型上添加



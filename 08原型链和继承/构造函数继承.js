//顶层父类
function Person(name) {
    this.name = "hell"
}
Person.prototype.run = function () {
    console.log(this.name + 'run');
}
//子类
function Student(name) {
    //student调用person，Person函数this就是指向student，把person的属性弄到本身上去
    Person.call(this, name)

    this.sn = "111"
}
Student.prototype = Person.prototype
Student.prototype.eat = function () {
    console.log(this.sn + 'eat');
}
var stu = new Student()
var stu = new Student()
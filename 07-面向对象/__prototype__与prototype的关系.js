//内部操作,new关键字
function foo() {
    var obj = {}
    this = {}
    this.__proto__ = foo.prototype
}
const p1 = new foo()
const p2 = new foo()
p1.__proto__ === foo.prototype
p2.__proto__ === foo.prototype
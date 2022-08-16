//---------1.
function foo() {
    console.log(this)
}

//foo()
//独立函数调用


var obj = {
    name: "obj",
    foo2: foo
}
//隐式绑定，绑定到obj上
obj.foo2()

//---------2.
var obj = {
    name: "obj1",
    foo() {
        console.log(this.name)
    }
}
var obj2 = {
    name: "obj2",
    bar: obj1.foo
}
obj2.bar()
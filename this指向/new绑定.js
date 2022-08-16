//我们通过一个new关键字调用一个函数时(构造器)，这个时候this是在调用这个构造器时创建出来的对象
//this = 创建出来的对象
//这个绑定过程就是new绑定
function person(name, age) {
    this.name = name
    this.age = age
    return this
}
var p = new person()

//案例
var obj = {
    name: "a",
    foo: function () {
        var name = "b"
        this.name = "c"
        console.log(this, this.name)
    }
}
new obj.foo()//"c"
var n = 100
//定义位置，父级作用域为全局
function foo() {
    n = 200
}
foo()
console.log(n)
//200




function foo2() {
    //undefined,自己存在
    console.log(n)
    var n = 200
    //200
    console.log(n)
}
var n = 100
foo2()


var n = 100
function foo5() {
    //自己不存在，找全局的
    console.log(n)
}
function foo6() {
    var n = 200
    //自己的
    console.log(n)
    foo5()
}
foo5()
foo6()
//全局
console.log(n)// 100



var a = 100
function foo9() {
    //undefined
    console.log(a)
    //运行时return
    return
    var a = 200
}


function foo11() {
    var a = b = 10
    //相当于
    var a = 10
    b = 10
}
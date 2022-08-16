//---------1.
function foo() {
    console.log("wz")
}

//直接调用不绑定，指向window
foo.call()-- - foo.apply()


//---------2.
function foo() {
    console.log(this)
}
foo.call("str")
foo.call(obj)

//---------call与apply区别.
function foo(a, b) {
    console.log(this, a + b)
}
foo.call(obj, 20, 30)
foo.apply(obj, [20, 30])


//---------bind.不用多次绑定
function bar() {
    console.log(this)
}
var fn = bar.bind("haha")
fn()//"haha"
fn()//"haha"
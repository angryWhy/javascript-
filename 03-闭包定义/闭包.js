function foo() {
    function bar() {
        console.log("bar")
    }
    return bar
}
var fn = foo()
fn




function foo() {
    var name = "a"
    function bar() {
        console.log("bar", name)
    }
    return bar
}
var fn = foo()
fn
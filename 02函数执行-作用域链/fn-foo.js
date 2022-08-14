foo()
function foo() {
    console.log("foo执行");
}
bar()
function bar() {
    var name = "bn"
    function inline() {
        console.log("内层函数");
    }
}
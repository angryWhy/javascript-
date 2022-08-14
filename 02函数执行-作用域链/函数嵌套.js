var message = "window"
function foo() {
    var message = "foo"
    bar()
}
function bar() {
    console.log(message);
}
foo()
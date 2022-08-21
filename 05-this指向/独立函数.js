//1.
function foo() {
    console.log(this);
}
function bar() {
    console.log(this);
}
function zoo() {
    bar()
}
zoo()

//2.
var obj = {
    say() {
        console.log(this);
    },
    he: zoo
}
var fn = obj.say()
fn()


//3
function aaa() {
    function haha() {
        console.log(this);
    }
    return haha
}
var bbb = aaa()
bbb()





var obj = {
    name: "he",
    sex: "men"
}

var info = Object.create(obj, {
    address: {
        writable: true,
        enumerable: true
    },
    phone: {
        writablet: true,
        configurable: true
    }
})


console.log(info.hasOwnProperty("name"));
console.log(info.hasOwnProperty("address"));


function Foo() { }
function Bar() { }
function Baz() { }

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
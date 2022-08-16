function createArray() {
    var arr = new Array(1024 * 1024).fill(1)
    return arr
}
var arrList = []
for (var i = 0; i < 100; i++) {
    arrList.push(createArray())
}
setTimeout(() => {
    arrList = null
}, 1000)
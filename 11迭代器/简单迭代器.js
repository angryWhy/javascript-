const names = [1, 2, 3, 4, 5]
let index = 0
const iterator = {
    next() {
        if (index < names.length) {
            return { done: false, value: names[index++] }
        } else {
            return { done: true, value: undefined }
        }
    }
}
//转换成函数形式
function iter(arr) {
    let index = 0
    return {
        next() {
            if (index < arr.length) {
                return { done: false, value: names[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}
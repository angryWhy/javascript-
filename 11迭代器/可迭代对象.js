// 当一个对象实现了(iterable protocol), 就是可迭代对象

// 这个对象要求实现了 @@iterator方法，并且可以使用Symbol.iterator访问该属性

const iteratorR = {
    names: [1, 2, 3, 4, 5],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }

    }

}
//调用
const iterator = iteratorR[Symbol.iterator]()
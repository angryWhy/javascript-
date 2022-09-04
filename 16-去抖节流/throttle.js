function throttle(fn, delay) {
    const _thorttle = () => {
        fn()
    }
    return _thorttle
}
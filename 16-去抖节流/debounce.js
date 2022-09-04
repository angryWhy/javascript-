function debounce(fn, delay) {
    let timer = null
    const _debounce = function () {
        if (timer) clearTimeout(timer)
        const timer = setTimeout(() => {
            fn()
        }, delay);
    }
    return _debounce
}
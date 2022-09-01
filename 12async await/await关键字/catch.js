async function mie() {
    const res = await new Promise((resolve, reject) => {
        reject("haha")
    })
}
mie.catch(err => {
    console.log(err)
})
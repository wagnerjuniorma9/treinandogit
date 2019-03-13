
const esperando = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wagner júnior")
        }, 3000)
    })
}
zezo
const run = async () => {
    return await esperando().then(result=>result).catch(err=>err)
}

console.log(run())

// esperando((err, result)=>{
//     if (err) return console.log(err)
//     console.log(result)
// })

console.log('Passou')

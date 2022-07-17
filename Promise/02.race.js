/**
 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
 * 哪个Promise最快得到结果，就返回那个结果，无论成功失败
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      if (promise instanceof Promise) {
        promise.then(
          res => resolve(res),
          err => reject(err)
        )
      } else {
        resolve(promise)
      }
    })
  })
}

const pro1 = new Promise((res, rej) => {
  rej(1)
})
const pro2 = new Promise((res, rej) => {
  res(2)
})

console.log(
  race([pro1, pro2])
    .then(res => console.log(res))
    .catch(err => console.log(err))
)

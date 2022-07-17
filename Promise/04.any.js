/**
 * any与all相反
 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
 * 如果有一个Promise成功，则返回这个成功结果
 * 如果所有Promise都失败，则报错
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    promises.forEach(promise => {
      if (promise instanceof Promise) {
        promise.then(
          res => {
            resolve(res)
          },
          err => {
            count++
            if (count === promises.length) {
              reject('All promises were rejected')
            }
          }
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
const pro3 = new Promise((res, rej) => {
  rej(3)
})
const pro4 = 4

console.log(
  any([pro1, pro2, pro3, pro4])
    .then(res => console.log(res))
    .catch(err => console.log(err))
)

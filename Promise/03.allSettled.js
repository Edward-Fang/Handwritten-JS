/**
 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
 * 把每一个Promise的结果，集合成数组，返回
 */
function allSettled(promises) {
  return new Promise((resolve, reject) => {
    const res = []
    let count = 0
    const addData = (status, value, i) => {
      res[i] = {
        status,
        value
      }
      count++
      if (count === promises.length) {
        resolve(res)
      }
    }
    promises.forEach((promise, i) => {
      if (promise instanceof Promise) {
        promise.then(
          res => {
            addData('fulfilled', res, i)
          },
          err => {
            addData('rejected', err, i)
          }
        )
      } else {
        addData('fulfilled', promise, i)
      }
    })
  })
}
const pro1 = new Promise((res, rej) => {
  res(1)
})
const pro2 = new Promise((res, rej) => {
  rej(2)
})
const pro3 = new Promise((res, rej) => {
  res(3)
})
const pro4 = 4

console.log(
  allSettled([pro1, pro2, pro3, pro4])
    .then(res => console.log(res))
    .catch(err => console.log(err))
)

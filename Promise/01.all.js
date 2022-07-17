/**
 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
 * 如果所有Promise都成功，则返回成功结果数组
 * 如果有一个Promise失败，则返回这个失败结果
 */
function all(promises) {
  const result = []
  let count = 0
  return new Promise((res, rej) => {
    const addData = (index, value) => {
      result[index] = value
      count++
      if (count === promises.length) res(result)
    }
    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise.then(
          res => {
            addData(index, res)
          },
          err => rej(err)
        )
      } else {
        addData(index, promise)
      }
    })
  })
}
const pro1 = new Promise((res, rej) => {
  res(1)
})
const pro2 = new Promise((res, rej) => {
  res(2)
})
const pro3 = new Promise((res, rej) => {
  res(3)
})

console.log(
  all([pro1, pro2, pro3])
    .then(res => console.log(res))
    .catch(err => console.log(err))
)

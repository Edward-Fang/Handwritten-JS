Promise.prototype.finally = function (cb) {
  return this.then(
    res => {
      cb()
      return res
    },
    err => {
      cb()
      throw err
    }
  )
}
const pro = new Promise((res, rej) => {
  rej('hhh')
})
pro
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => {
    console.log('finally')
  })

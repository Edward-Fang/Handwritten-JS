const compose = (...fn) => {
  if (fn.length === 0) return num => num
  if (fn.length === 1) return fn[0]
  return fn.reduce((pre, next) => {
    return num => {
      return next(pre(num))
    }
  })
}

const fn1 = (x) => {
  return x + 1
}
const fn2 =(x) => {
  return x + 2
}
const fn3 = (x) => {
  return x + 3
}
const fn4 = (x) => {
  return x + 4
}
const a = compose(fn1, fn2, fn3, fn4)(0)
console.log(a) // 1+2+3+4=10

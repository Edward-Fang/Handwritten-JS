const curry = (fn, ...args1) => {
  // 获取fn参数的数量 Function的length等于参数数量
  const length = fn.length
  let allArgs
  const res = (...args2) => {
    allArgs = [...args1, ...args2]
    // 长度相等返回结果
    if (allArgs.length === length) return fn(...allArgs)
    // 不相等返回函数
    else return '参数长度不符'
  }
  return res
}

const add = (a, b, c) => a + b + c
const a = curry(add, 1, 2)
console.log(a(3))

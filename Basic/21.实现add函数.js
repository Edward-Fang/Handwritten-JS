const add = (...args1) => {
  let allArgs = [...args1]
  function fn(...args2) {
    if (!args2.length) return fn.toString()
    allArgs = [...allArgs, ...args2]
    return fn
  }

  fn.toString = () => {
    return allArgs.reduce((pre, next) => pre + next)
  }
  return fn
}

console.log(add(1)(2)(3)(4)())

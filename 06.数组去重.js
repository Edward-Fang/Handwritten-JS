// 用`Map`记录
const quChong1 = (arr) => {
  const newArr = []
  arr.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 1)
      newArr.push(next)
    }
    return pre
  }, new Map())
  return newArr
}

// 用`Set`去重
const quChong2 = (arr) => {
  return [ ...new Set(arr)]
}


const getLevel = obj => {
  let res = 1
  function calculate(obj, num) {
    const level = num ? num : 0
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          calculate(obj[key], level + 1)
        } else {
          res = level + 1 > res ? level + 1 : res
        }
      }
    } else {
      res = level > res ? level : res
    }
  }
  calculate(obj)
  return res
}
const obj = {
  a: 1,
  b: {
    c: {
      d: 1
    }
  }
}
console.log(getLevel(obj))

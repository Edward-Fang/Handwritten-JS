Array.prototype.my_flat = function (num = Infinity) {
  let arr = this
  let i = 0
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
    i++
    if (i >= num) break
  }
  return arr
}

const test = [1, [2, 3, [4, 5]], [8, 9]]
console.log(test.my_flat(1))

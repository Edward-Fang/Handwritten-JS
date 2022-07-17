Object.prototype.my_is = function (x, y) {
  if (x === y) {
    // 防止-0和+0
    return x !== 0 || 1 / x === 1 / y
  }
  return x !== x && y !== y
}

const a = { name: 'hhh' }
const b = a
const c = { name: 'hhh' }

console.log(Object.my_is(a, b))
console.log(Object.my_is(a, c))

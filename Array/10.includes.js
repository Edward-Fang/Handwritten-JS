const peoples = require('./Array')

Array.prototype.my_includes = function (value, start = 0) {
  if (start < 0) start = this.length + start
  const isNaN = Number.isNaN(value)
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || (isNaN && Number.isNaN(this[i]))){
      return true
    }
  }
  return false
}

console.log([1, 2, 3].my_includes(2))
console.log([1, 2, NaN].my_includes(NaN))
console.log([1, 2, 3].my_includes(2, -1))

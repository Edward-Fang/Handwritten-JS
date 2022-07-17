Array.prototype.my_join = function (s = ',') {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`
  }
  return str
}

console.log([1, 2, 3].my_join())
console.log([1, 2, 3].my_join('*'))

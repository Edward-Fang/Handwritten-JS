const peoples = require('./Array')

Array.prototype.my_findIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return i
  }
  return -1
}

console.log(peoples.my_findIndex(item => item.age === 20))

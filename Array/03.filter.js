const peoples = require('./Array')

Array.prototype.my_filter = function (cb) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this) && res.push(this[i])
  }
  return res
}

console.log(peoples.my_filter(item => item.age > 19))

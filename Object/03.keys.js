const test = require('./Object')

Object.prototype.my_keys = function (obj) {
  const res = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(key)
  }
  return res
}

console.log(Object.my_keys(test))

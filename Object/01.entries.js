const test = require('./Object')

Object.prototype.my_entries = function (obj) {
  const res = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]])
  }
  return res
}

console.log(Object.my_entries(test))

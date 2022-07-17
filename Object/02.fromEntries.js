const test = [
  ['name', 'hhh'],
  ['age', 18],
  ['gender', '男']
]

Object.prototype.my_fromEntries = function (arr) {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i]
    obj[key] = value
  }
  return obj
}

console.log(Object.my_fromEntries(test))

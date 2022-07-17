// assign接收多个对象，并将多个对象合成一个对象
// 这些对象如果有重名属性，以后来的对象属性值为准
// assign返回一个对象，这个对象 === 第一个对象
Object.prototype.my_assign = function (target, ...args) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null object')
  }
  target = Object(target)

  for (let nextObj of args) {
    for (let key in nextObj) {
      nextObj.hasOwnProperty(key) && (target[key] = nextObj[key])
    }
  }
  return target
}

const testa = { name: 'hhh' }
const testb = { name: 'xxx', age: 18 }
const testc = { age: 20, gender: '男' }

const testd = Object.my_assign(testa, testb, testc)
console.log(testd)
console.log(testa === testd)

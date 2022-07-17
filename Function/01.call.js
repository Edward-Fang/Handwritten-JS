Function.prototype.my_call = function (obj, ...args) {
  obj = obj || window

  // Symbol是唯一的，防止重名key
  const fn = Symbol()
  obj[fn] = this

  return obj[fn](...args)
}

const testa = {
  name: 'hhh',
  testFn(age) {
    console.log(`${this.name}${age}!`)
  }
}
const testb = {
  name: 'xxx'
}
testa.testFn.my_call(testb, 22)

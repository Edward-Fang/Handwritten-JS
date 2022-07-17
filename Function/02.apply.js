Function.prototype.my_apply = function (obj, args) {
  obj = obj || window
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
testa.testFn.my_apply(testb, [22])
